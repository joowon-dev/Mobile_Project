from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import json
import faiss
import torch

print(torch.__version__)
app = Flask(__name__)
from groundingdino.util.inference import load_model, load_image, predict, annotate
import cv2

model = load_model("./GroundingDINO/groundingdino/config/GroundingDINO_SwinT_OGC.py", "./GroundingDINO/weights/groundingdino_swint_ogc.pth")
IMAGE_PATH = "./GroundingDINO/weights/dog-3.jpeg"
TEXT_PROMPT = "chair . person . dog ."
BOX_TRESHOLD = 0.35
TEXT_TRESHOLD = 0.25

image_source, image = load_image(IMAGE_PATH)

boxes, logits, phrases = predict(
    model=model,
    image=image,
    caption=TEXT_PROMPT,
    box_threshold=BOX_TRESHOLD,
    text_threshold=TEXT_TRESHOLD
)

annotated_frame = annotate(image_source=image_source, boxes=boxes, logits=logits, phrases=phrases)
cv2.imwrite("annotated_image.jpg", annotated_frame)

@app.route('/')
def home():
    return 'Home Page'

@app.route('/upload', methods=['POST'])
def upload_file():

    if 'photo' in request.files:
        photo = request.files['photo']
        
        test = []
        test.append("test")
        photo.save('./img/userImg.jpg')
        return test
        
    else:
        return jsonify({'error': '사진이 업로드되지 않았습니다.'})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
# 스타트 명령어 flask run --host=0.0.0.0 --port=5000