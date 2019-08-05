# manage.py
from flask_script import Manager
from app import app, db
from models import create_tables

manager = Manager(app)

@manager.command
def migrate():
    create_tables()

if __name__ == '__main__':
    manager.run()