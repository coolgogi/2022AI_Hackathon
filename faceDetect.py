from genericpath import isfile
import cv2
import os

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_casecade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascades/haarcascade_eye.xml')
print(isfile('downloads/한예슬/18.20210719506741.jpg'))
img = cv2.imread('downloads/한예슬/18.20210719506741.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, 1.3,5)
print(face_cascade.detectMultiScale)
imgNum  = 0
for (x,y,w,h) in faces:
    cropped = img[y - int(h / 4):y + h + int(h / 4), x - int(w / 4):x + w + int(w / 4)]
    if(not cv2.imwrite("good" + str(imgNum) + ".png", cropped)):
        print('fuck')
    else: print('good')
    imgNum += 1

# cv2.imshow('Image view', img)
cv2.waitKey(0)
cv2.destroyAllWindows()