import os
from peewee import PostgresqlDatabase, Model, PrimaryKeyField, CharField, IntegerField, ForeignKeyField, TextField, DeferredThroughModel, ManyToManyField
from playhouse.db_url import connect

'''
DB_NAME = os.getenv('DB_NAME', 'isbn_metadata')
DB_USER = os.getenv('DB_USER', 'super')
DB_PASS = os.getenv('DB_PASS', '123')
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT', '')

database = PostgresqlDatabase(
    DB_NAME,
    user=DB_USER,
    password=DB_PASS,
    host=DB_HOST,
)
'''
database_url = os.getenv('DATABASE_URL', 'postgresql://super:123@localhost:5432/isbn_metadata')
database = connect(database_url)

class BaseModel(Model):
    class Meta:
        database = database


class Author(BaseModel):
    id = PrimaryKeyField(null=False)
    name = CharField(max_length=255, unique=True)


AuthorThroughDeferred = DeferredThroughModel()


class Book(BaseModel):
    id = PrimaryKeyField(null=False)
    google_book_id = CharField(max_length=12, unique=True)
    title = CharField(max_length=255)
    subtitle = CharField(max_length=255, null=True)
    description = TextField(null=True)
    published_date = CharField(max_length=45, null=True)
    isbn_10 = CharField(max_length=10, null=True, unique=True)
    isbn_13 = CharField(max_length=13, null=True, unique=True)
    publisher = CharField(max_length=255, null=True)
    page_count = CharField(max_length=45, null=True)
    print_type = CharField(max_length=45, null=True)
    language = CharField(max_length=45, null=True)
    main_category = CharField(max_length=255, null=True)
    authors = ManyToManyField(Author, backref='books',
                              through_model=AuthorThroughDeferred)


class AuthorBook(BaseModel):
    author = ForeignKeyField(Author, backref='books_through')
    book = ForeignKeyField(Book, backref='authors_through')


AuthorThroughDeferred.set_model(AuthorBook)


def create_tables():
    with database:
        database.drop_tables([Author, Book, AuthorBook])
        database.create_tables([Author, Book, AuthorBook])
