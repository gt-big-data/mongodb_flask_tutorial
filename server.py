import flask
import pymongo
import random
import bson

app = flask.Flask(__name__)
mongodb_server = pymongo.MongoClient('mongodb://143.215.138.132:27017/')
db = mongodb_server.big_data


@app.route('/hi/<string:name>')
def say_hello(name):
    return

@app.route('/')
def index():
    # display 10 random sources
    return

@app.route('/articles/<string:source>')
def list_articles(source):
    # return articles that match the source
    return

@app.route('/article/<string:_id>')
def get_article(_id):
    # return the article that has the given id
    return
@app.route('/chartdata')
def sources_chart_data():
    # use the mongodb aggregation framework to return the top 20 sources
    # with the most articles.
    return


@app.route('/chart')
def chart():
    return flask.render_template('chart.html')

if __name__ == "__main__":
    app.debug = True
    app.run()


