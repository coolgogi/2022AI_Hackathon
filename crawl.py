from google_images_download import google_images_download
 
response = google_images_download.googleimagesdownload()
 
arguments = {"keywords": "조혜련","limit":10,"print_urls":True, "format": "jpg"}   #creating list of arguments
paths = response.download(arguments)   #passing the arguments to the function
print(paths)