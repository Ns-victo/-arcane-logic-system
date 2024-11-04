from flask import Flask, render_template, request, jsonify


app = Flask(__name__)

# Dicionário para armazenar estados de conversas
user_states = {}

@app.route('/')
def homepage():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
