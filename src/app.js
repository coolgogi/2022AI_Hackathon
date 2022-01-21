// @ts-check
const express = require('express')
const { spawn } = require('child_process')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.set('views', 'src/views')
app.set('view engine', 'pug')
// app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/image', (req, res) => {
  res.redirect(`/question/${req.body.imgname}`)
})

app.get('/question/:filename', (req, res) => {
  const { filename } = req.params
  const result = spawn('python3', ['src/predictImage.py', filename])
  result.stdout.on('data', (data) => {
    console.log(data.toString())
  })
  result.stderr.on('data', (data) => {
    console.log(data.toString())
  })
  res.render('')
})

app.get('/question', (req, res) => {
  res.render('question')
})

app.post('/answer', (req, res) => {
  console.log(req.body)
  res.send('하앙')
})

app.get('/zz', (req, res) => {
  const result = spawn('python3', [
    'src/predict.py',
    '이상원_사진.jpg',
    '1',
    '2',
    '3',
    '4',
    '2',
  ])
  result.stdout.on('data', (result1) => {
    console.log(result1.toString())
  })
  result.stderr.on('data', (result1) => {
    console.log(result1.toString())
  })
  res.send('good')
})

app.use('/public', express.static('src/public'))
app.use('/upload', express.static('upload'))

// @ts-ignore
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

module.exports = app
