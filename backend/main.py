from flask import Flask, jsonify, request
import os
import openai
from openai.error import RateLimitError
from dotenv import load_dotenv
from pymongo import MongoClient


# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)


mongoUrl = os.environ.get("mongoUrl")
client = MongoClient(mongoUrl)
db = client["flaskDB"]
menu_collection = db["menu"]
orders_collection = db["orders"]


@app.route("/")
def index():
    return "welcome to our backend"


# chatbot
openai.api_key = os.getenv("OPENAI_API_KEY")
print(os.getenv("OPENAI_API_KEY"))


@app.route("/gpt4", methods=["GET", "POST"])
def gpt4():
    user_input = (
        request.args.get("user_input")
        if request.method == "GET"
        else request.form["user_input"]
    )
    messages = [
        {"role": "user", "content": user_input},
        {
            "role": "assistant",
            "content": "take a role of online food delivery chatbot and resolve the query of customer",
        },
    ]

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
        content = response.choices[0].message["content"]
    except RateLimitError:
        content = "The server is experiencing a high volume of requests. Please try again later."

    return jsonify(content=content)


if __name__ == "__main__":
    app.run(debug=True)
