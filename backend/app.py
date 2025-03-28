from flask import Flask, request, jsonify
from routes.predict import predict_image
from routes.upload import upload_file

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    return predict_image(request)

@app.route('/upload', methods=['POST'])
def upload():
    return upload_file(request)

if __name__ == '__main__':
    app.run(debug=True)
