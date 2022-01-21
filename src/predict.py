import sys
import warnings
import joblib
import pandas as pd

warnings.filterwarnings('ignore')
loaded_model = joblib.load('src/kerasmodel/svc_model.pkl')

def questionPredict(argv):
	df = []
	for e in argv:
		df.append([e])
	df = pd.DataFrame(df).transpose()
	print(loaded_model.predict(df)[0])

if __name__ == '__main__':
	imageWithQuestion = [int(sys.argv[2]), int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])]
	questionPredict(imageWithQuestion)

	sys.stdout.flush()