import os
import requests
import json

API_KEY = os.getenv('GOOGLE_BOOKS_API_KEY', '')
URL_GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=%s&key=' + API_KEY
GOOGLE_BOOKS_QUERY_KEYWORDS = [
    'intitle', 'inauthor', 'inpublisher', 'subject', 'isbn', 'lccn', 'oclc'
]

def request(url):
    print(url)
    # request and parse content from google books
    response = requests.get(url)
    response.raise_for_status()
    if response.content:
        return json.loads(response.content)
    else: 
        return None

def query(q, keyword=None, startIndex=0):
    if keyword is None: return request(URL_GOOGLE_BOOKS_API % (q + '&startIndex=%s' % str(startIndex)))
    # query by keyword predefined by google books api
    if keyword not in GOOGLE_BOOKS_QUERY_KEYWORDS: raise Exception('keyword not exists')
    return query(keyword + ':' + q, startIndex=startIndex)

def sortcut_query_by_isbn(isbn):
    return query('isbn:' + isbn)