from flask import Flask, render_template, request, redirect, url_for
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

client = pymongo.MongoClient(os.getenv('MONGO_URI'))

db = client.test
collection = db['flask_assignment']

app = Flask(__name__)

@app.route('/')
def index():
    error = request.args.get('error')
    return render_template('index.html', error=error)

@app.route('/submit', methods=['POST'])
def submit():
    try:
        form_data = dict(request.form)

        if not form_data.get('username'):
            raise Exception("Username is required!")

        collection.insert_one(form_data)

        return {
            "message": "Data submitted successfully"
        }, 200

    except Exception as e:
        return {
            "error": str(e)
        }, 400

@app.route('/success')
def success():
    return "<h1>Data submitted successfully</h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)