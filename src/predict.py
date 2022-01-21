import tensorflow as tf
from PIL import Image, ImageOps
import numpy as np
import sys
import warnings
import joblib
import pandas as pd

warnings.filterwarnings('ignore')
model = tf.keras.models.load_model('src/kerasmodel/keras_model.h5')
data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
loaded_model = joblib.load('src/kerasmodel/svc_model.pkl')

def goPredict(url):	
	image = ImageOps.fit(Image.open(url), (224, 224), Image.ANTIALIAS)
	image_array = np.asarray(image)
	normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
	data[0] = normalized_image_array
	prediction = model.predict(data)
	score = tf.nn.softmax(prediction[0])
	return np.argmax(score)

def questionPredict(argv):
	df = []
	for e in argv:
		df.append([e])
	df = pd.DataFrame(df).transpose()
	print(loaded_model.predict(df)[0])

if __name__ == '__main__':
	url = sys.argv[1]
	imageResult = goPredict(url)
	imageWithQuestion = [imageResult, int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])]
	questionPredict(imageWithQuestion)

	sys.stdout.flush()