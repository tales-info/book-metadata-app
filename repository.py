
from lxml import etree
import json
from collections.abc import Sequence
from models import Book, Author, AuthorBook, database
from request import sortcut_query_by_isbn, query
from playhouse.shortcuts import model_to_dict


class ResultSet(Sequence):
    def __init__(self, l=[], count=None, errors=[]):
        if type(l) is not list:
            raise ValueError()
        self._list = l
        self._count = count or len(l)
        self._errors = errors
    
    def __iter__(self):
        yield from self._list

    def __len__(self):
        return len(self._list)

    def __getitem__(self, index):
        return self._list.__getitem__(index)

    def to_xml(self):
        books = etree.Element('books', count=str(self._count))
        result = etree.SubElement(books, 'result')
        for i in self.to_object_array():
            book = etree.SubElement(
                result, 
                'book', 
                id=str(i['id']), 
                isbn_10=i['isbn_10'], 
                isbn_13=i['isbn_13'], 
                title=i['title'],
                subtitle=i['subtitle'] or '', 
                published_date=i['published_date'] or '', 
                publisher=i['publisher'] or '',
                page_count=str(i['page_count'] or 0),
                print_type=i['print_type'] or '',
                language=i['language'] or '',
            )
            if i['description']:
                description = etree.SubElement(book, 'description')
                description.text = i['description'] or ''
            if i['main_category']:
                main_category = etree.SubElement(book, 'main_category')
                main_category.text = i['main_category'] or ''
            authors = etree.SubElement(book, 'authors')
            for a in i['authors']:
                author = etree.SubElement(authors, 'author')
                author.text = a

        errors = etree.SubElement(books, 'errors')
        for i in self._errors:
            etree.SubElement(errors, 'error', isbn=i['isbn'], error=i['error'])
        return etree.tostring(books, pretty_print=True)

    def to_object_array(self):
        for i in self._list:
            model = model_to_dict(i)
            model['authors'] = [a.name for a in i.authors]
            yield model
        
    def to_json(self):        
        return json.dumps({
            'result': list(self.to_object_array()),
            'count': self._count,
            'errors': self._errors
        }, sort_keys=True, indent=4)
    
    def __repr__(self):
        return str(self)

    def __str__(self):
        return '<%s success="%s" count="%s" error="%s">' % (self.__class__.__name__, len(self._list), self._count, len(self._errors))
    
    

class BaseRepository(object):
    
    def query(self, q):
        """
        search book by term. all result are inserted on local database for future use
        
        :param q: query term for search
        :type q: str
        :return: return result of query
        :rtype: ResultSet object return
        """
        raise NotImplementedError()

    def get(self, *isbn_list):
        """
        get book metadata by one or more isbn. 
        before search on the remote api, the isbn is searched in the local database. 
        all result are inserted on local database for future use.

        :param isbn_list: one or more isbn
        :type q: *str
        :return: return result of query
        :rtype: ResultSet object return
        """
        raise NotImplementedError()


class GoogleBookRepository(BaseRepository):

    def query(self, q, keyword=None, startIndex=0):
        data = []
        total = 0
        try:
            total, data = self.insert_book(query(q, keyword, startIndex))
        except:
            pass
        return ResultSet(data, total)
        
    def get(self, *isbn_list):
        error = []
        def get_or_create():
            for isbn in isbn_list:
                books = Book.select().where((Book.isbn_10 == isbn) | (Book.isbn_13 == isbn))
                if books.count() > 0:
                    for i in books:
                        yield i
                else:
                    try:
                        _, data = self.insert_book(sortcut_query_by_isbn(isbn))
                        for item in data:
                            yield item
                    except Exception as e:
                        error.append({'isbn': isbn, 'error': str(e)})
        resultado = list(get_or_create())
        return ResultSet(resultado, None, error)
        
    def insert_book(self, book_data):
        total_items = book_data['totalItems'] if 'totalItems' in book_data else 0
        books = []
        created = False
        if 'items' in book_data:
            items = book_data['items']
            for item_data in items:
                google_book_id = item_data['id']
                title = None
                subtitle = None
                description = None
                volume_info = item_data['volumeInfo']
                publisher = None
                page_count = None
                print_type = None
                language = None
                main_category = None
                if volume_info:
                    title = volume_info['title'] if 'title' in volume_info else None
                    subtitle = volume_info['subtitle'] if 'subtitle' in volume_info else None
                    description = volume_info['description'] if 'description' in volume_info else None
                    published_date = volume_info['publishedDate'] if 'publishedDate' in volume_info else None
                    identifiers = volume_info['industryIdentifiers'] if 'industryIdentifiers' in volume_info else None 
                    publisher = volume_info['publisher'] if 'publisher' in volume_info else None
                    page_count = volume_info['pageCount'] if 'pageCount' in volume_info else None
                    print_type = volume_info['printType'] if 'printType' in volume_info else None
                    language = volume_info['language'] if 'language' in volume_info else None
                    main_category = volume_info['mainCategory'] if 'mainCategory' in volume_info else None
                    isbn_10 = None
                    isbn_13 = None
                    for identifier in identifiers:
                        if identifier['type'] == 'ISBN_10':
                            isbn_10 = identifier['identifier']
                        if identifier['type'] == 'ISBN_13':
                            isbn_13 = identifier['identifier']
                    authors = item_data['volumeInfo']['authors'] or []
                
                with database.atomic():
                    book, created = Book.get_or_create(
                        google_book_id=google_book_id, 
                        title=title, 
                        subtitle=subtitle, 
                        description=description, 
                        published_date=published_date, 
                        isbn_10=isbn_10, 
                        isbn_13=isbn_13,
                        publisher=publisher,
                        page_count=page_count,
                        print_type=print_type,
                        language=language,
                        main_category=main_category
                    )
                    
                    if created:
                        for a in authors:
                            a, _ = Author.get_or_create(name=a)
                            AuthorBook.create(author=a.id, book=book.id)
                books.append(book)
        else:
            raise Exception('isbn not found')
        return (total_items, books)
