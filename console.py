from request import query
from models import Author, Book, AuthorBook, create_tables
from repository import GoogleBookRepository


reset_database = False
if (reset_database): create_tables()

#try:
#    response = query('nivio ziviani', 'inauthor')
#except Exception as e:
#    print(e)

rep = GoogleBookRepository()
response = rep.get('0440335701', '9788522105250', '123')
#print(str(response))
#print(response.to_json())
print(response.to_xml().decode('utf-8'))