import os
from flask import request, jsonify

UPLOAD_FOLDER = "data/train/injured"

def upload_file(req):
    if 'file' not in req.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = req.files['file']
    filename = file.filename
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    return jsonify({"message": "File uploaded successfully", "filename": filename})
