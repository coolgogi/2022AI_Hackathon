/* eslint-disable */

const myVideoStream = document.getElementById('myVideo') // make it a global variable
let myStoredInterval = 0

;(function () {
  navigator.getMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  navigator.getMedia(
    { video: true, audio: false },

    (stream) => {
      myVideoStream.srcObject = stream
      myVideoStream.play()
    },

    (error) => {
      alert('webcam not working')
    }
  )
})()

function takeSnapshot() {
  const myCanvasElement = document.getElementById('myCanvas')
  const myCTX = myCanvasElement.getContext('2d')
  myCTX.drawImage(
    myVideoStream,
    0,
    0,
    myCanvasElement.width,
    myCanvasElement.height
  )
  const imgData = myCanvasElement.toDataURL()
  return imgData
}

let _snapshot
function _takeSnapshot() {
  let myImage = document.getElementById('myImage')
  myImage.src = takeSnapshot()
  document.getElementById('button').value = '다시찍기'
}

function submit(Face, Color, Season, Word, MBTI, MBTI2) {
  document.write(Face)
  document.write('\n')
  document.write(Color)
  document.write('\n')
  document.write(Season)
  document.write('\n')
  document.write(Word)
  document.write('\n')
  document.write(MBTI)
  document.write('\n')
  document.write(MBTI2)
  // 머신러닝 돌리기
}
