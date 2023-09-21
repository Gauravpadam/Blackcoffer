from flask import Flask, jsonify
import pymongo
from flask_cors import CORS

app = Flask(__name__)

# Define the MongoDB URI, replace with your actual URI
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['mockData']
collection = db['dbCollection']

CORS(app)

@app.route('/getData')
def getData():
    try:
        # Access the "mockData" database and the "dbCollection" collection

        # Fetch data from the collection (e.g., all documents)
        data = collection.find()

        data_list = []

        # Convert the data to a list of dictionaries (JSON format)
        for item in data:
            if '_id' in item:
                del item['_id']
            data_list.append(item)

        # Return the data as JSON response
        return jsonify(data_list)
    except Exception as e:
        return str(e)  # Return the error message for debugging

if __name__ == '__main__':
    app.run()
