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

  const array = new Uint32Array(5)
  window.crypto.getRandomValues(array)
  const crypt = array.toString().replaceAll(',', '')
  const dataURL = myCanvasElement.toDataURL('image/png')
  const aTag = document.createElement('a')
  aTag.download = `${crypt}.png`
  console.log(crypt)
  aTag.href = dataURL
  aTag.click()

  submitToserver(`${crypt}.png`)
}

function submitToserver(filename) {
  var form = document.createElement('form')
  form.setAttribute('charset', 'UTF-8')
  form.setAttribute('method', 'Post') //Post 방식
  form.setAttribute('action', '/image') //요청 보낼 주소

  var hiddenField = document.createElement('input')
  hiddenField.setAttribute('type', 'hidden')
  hiddenField.setAttribute('name', 'imgname')
  hiddenField.setAttribute('value', filename)
  form.appendChild(hiddenField)
  document.body.appendChild(form)

  form.submit()
}

let _snapshot
function _takeSnapshot() {
  let myImage = document.getElementById('myImage')
  myImage.src = takeSnapshot()
  document.getElementById('button').value = '다시찍기'
}
