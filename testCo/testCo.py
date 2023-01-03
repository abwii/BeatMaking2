from flask import Flask

app = Flask(__name__)

@app.route("/")

def serv():
    return '''ici code php ou html osef \n
            <p style="color : red;">là y'a du code css par exemple</p>'''

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080')
