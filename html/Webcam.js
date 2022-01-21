var myVideoStream = document.getElementById('myVideo')     // make it a global variable
var myStoredInterval = 0

function getVideo(){
navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
navigator.getMedia({video: true, audio: false},
                   
  function(stream) {
    myVideoStream.srcObject = stream   
    myVideoStream.play();
}, 
                   
 function(error) {
   alert('webcam not working');
});
}

function takeSnapshot() {
 var myCanvasElement = document.getElementById('myCanvas');
 var myCTX = myCanvasElement.getContext('2d');
 myCTX.drawImage(myVideoStream, 0, 0, myCanvasElement.width, myCanvasElement.height);                   
//  myCTX.drawImage(myVideoStream, 0, 0, 128, 128);  
 var imgData = myCanvasElement.toDataURL();
 return imgData;
}

function takeAuto() {
  takeSnapshot() // get snapshot right away then wait and repeat
  clearInterval(myStoredInterval)
  myStoredInterval = setInterval(function(){                                                                                         
     takeSnapshot()
 }, document.getElementById('myInterval').value);        
}

function submit(Face,Color,Season,Word,MBTI,MBTI2){
  document.write(Face);
  document.write('\n');
  document.write(Color);
  document.write("\n");
  document.write(Season);
  document.write("\n");
  document.write(Word);
  document.write("\n");
  document.write(MBTI);
  document.write("\n");
  document.write(MBTI2);
  //머신러닝 돌리기
}