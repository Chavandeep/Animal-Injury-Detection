import os
from tensorflow.keras.models import load_model
from preprocessing import preprocess_image

MODEL_PATH = "models/best_animal_injury_model.h5"

# Load model
model = load_model(MODEL_PATH)

def predict(image_path):
    img_array = preprocess_image(image_path)
    prediction = model.predict(img_array)[0][0]
    return "injured" if prediction > 0.5 else "healthy"
