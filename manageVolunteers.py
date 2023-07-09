from flask import Flask, request, redirect, session, make_response, jsonify
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = 'your_secret_key'

client = MongoClient("mongodb+srv://ritikasthana11:d6YMRUxWXPO5dlRC@cluster0.nvdwo2g.mongodb.net/?retryWrites=true&w=majority")
db = client["volunteer_db"]
collects = db["workshops"]

@app.route("/register", methods = ["POST"])
def register():
    username = request.form.get("username")
    password = request.form.get("password")

    if client["volunteer_db"]["credentials"].find({"username" : username}):
        return make_response({"message" : "username exists"})
    else:
        client["volunteer_db"]["credentials"].insert_one({"username" : username, "password" : password})
        return make_response({"message" : "success"}, 200)

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username in users and users[username] == password:
            session["username"] = username  # Store username in session
            print(session)
            return make_response({"message" : "login successful"})
        else:
            return make_response({"message" : "login unsuccessful"})

    return make_response({"message" : "Login Successful"})


@app.route("/make-workshop", methods = ["POST"])
def add_workshop():
    if "username" in session:
        place = request.form.get("location")
        date = request.form.get("date")
        username = session.get("username")
        collects.insert_one({"username" : username, 
                            "location" : place,
                            "date" : date})
        
        return make_response({"message" : "success"}, 200)
    return make_response({"message" : "login first"})

@app.route("/completed-workshops", methods = ["GET"])
def past_workshops():
    if "username" in session:
        res = [rec for rec in collects.find({"username":session["username"]}, { "_id": 0 })]
        
        return jsonify(res)
    
    return make_response({"message" : "login required"})

@app.route("/upload", methods = ["POST"])
def upload_resources():
    if "username" in session:
        hyperlink = request.form.get("url")
        client["volunteer_db"]["video-resources"].insert_one({"username" : session["username"], "url" : hyperlink})

@app.route("/logout")
def logout():
    session.pop("username", None)
    return make_response({"message" : "success"})


if __name__ == "__main__":
    app.run(debug = True)