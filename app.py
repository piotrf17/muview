from flask import Flask, jsonify, render_template, request, session
import random, json
app = Flask(__name__)


@app.route('/muview')
def music():
    f = open('scrobbles.json', 'r')

    return jsonify(data=json.load(f))

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.secret_key = 'computer cat'

    app.run(debug=True)
