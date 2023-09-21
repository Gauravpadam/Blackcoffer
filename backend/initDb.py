import pymongo
import json

mongo_uri = 'mongodb://localhost:27017/'
dbName = 'mockData'

jsonPath = './jsondata.json'

with open(jsonPath , "r" , encoding='utf-8') as json_file:
    data = json.load(json_file)

client = pymongo.MongoClient(mongo_uri)
db = client[dbName]

collection_name = "dbCollection"

collection = db[collection_name]
collection.insert_many(data)
