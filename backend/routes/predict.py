import os
import numpy as np
from flask import request, jsonify
from keras.preprocessing.image import ImageDataGenerator, load_img, img_to_array
from keras.models import Sequential


MODEL_PATH = "models/best_animal_injury_model.h5"
IMG_SIZE = 416

# Load the trained model
model = load_model(MODEL_PATH)

def predict_image(req):
    if 'file' not in req.files:
        return jsonify({"error": "No file provided"}), 400

    file = req.files['file']
    file_path = os.path.join("data/test", file.filename)
    file.save(file_path)

    # Preprocess image
    img = load_img(file_path, target_size=(IMG_SIZE, IMG_SIZE))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Make prediction
    prediction = model.predict(img_array)[0][0]
    label = "injured" if prediction > 0.5 else "healthy"

    return jsonify({"prediction": label, "confidence": float(prediction)})
