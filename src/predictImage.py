import tensorflow as tf
from PIL import Image, ImageOps
import warnings
import numpy as np
import sys

warnings.filterwarnings('ignore')
model = tf.keras.models.load_model('src/kerasmodel/keras_model.h5')
data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

def goPredict(url):	
	image = ImageOps.fit(Image.open(url), (224, 224), Image.ANTIALIAS)
	image_array = np.asarray(image)
	normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
	data[0] = normalized_image_array
	prediction = model.predict(data)
	score = tf.nn.softmax(prediction[0])
	print(np.argmax(score))

if __name__ == '__main__':
    imageResult = goPredict(sys.argv[1])