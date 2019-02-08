from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_kc

#create an instance of flask
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/kc_app"
mongo = PyMongo(app)


@app.route("/")
def index():
    kc = mongo.db.kc.find_one()
    return render_template("index.html", kc=kc)

@app.route("/scrape")
def scrape():
    kc = mongo.db.kc
    kc_data = scrape_kc.scrape()
    kc.update({}, kc_data, upsert=True)

    return redirect("/", code=302)    

if __name__ == "__main__":
    app.run(debug=True)