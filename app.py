import os
from flask import Flask, escape, request, Response, send_from_directory
from repository import GoogleBookRepository
from flask_cors import CORS
from playhouse.db_url import connect


app = Flask(__name__, static_url_path='/', static_folder='static/dist',)
app.config.from_object(os.getenv('APP_SETTINGS', 'config.DevelopmentConfig'))

db = connect(app.config['DATABASE_URI'])
app.db = db
CORS(app)
repository = GoogleBookRepository()

@app.route('/api/search/<term>')
@app.route('/api/search/<term>/<keyword>')
def search(term, keyword=None):
    start = request.args.get('start', '0')
    response = repository.query(term, keyword, start)
    response_format = request.args.get('format', 'json')
    if response_format == 'json':
        return Response(response.to_json(), mimetype='application/json', headers={'Access-Control-Allow-Origin': '*'})
    else:
        return Response(response.to_xml(), mimetype='application/xml', headers={'Access-Control-Allow-Origin': '*'})


@app.route('/api/get/<path:isbn_list>')
def get(isbn_list):
    response = repository.get(*isbn_list.split('/'))
    response_format = request.args.get('format', 'json')
    if response_format == 'json':
        return Response(response.to_json(), mimetype='application/json', headers={'Access-Control-Allow-Origin': '*'})
    else:
        return Response(response.to_xml(), mimetype='application/xml', headers={'Access-Control-Allow-Origin': '*'})


@app.route('/')
def get_ui():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')