from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify


app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'WElcome to Spotifying Youtube!'})


@app.route("/playlist", methods=["GET"])
def get_playlist():
    return "playlist"



if __name__ == '__main__':
    app.run(port=8080)