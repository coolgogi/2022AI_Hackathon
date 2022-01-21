// @ts-check

/* eslint-disable no-console */
const express = require('express')
const { spawn } = require('child_process')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.set('views', 'src/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/image', (req, res) => {
  res.redirect(`/question/${req.body.imgname}`)
})

app.get('/question/:filename', (req, res) => {
  const { filename } = req.params
  const filepath = `/mnt/c/Users/samsung/Downloads/${filename}`
  const result = spawn('python3', ['src/predictImage.py', filepath])

  result.stdout.on('data', (data) => {
    res.render('question', {
      nextURL: `/answer/${data.toString()}`,
    })
  })
  result.stderr.on('data', (data) => {
    console.log(data.toString())
  })
})

app.post('/answer/:id', (req, res) => {
  const result = spawn('python3', [
    'src/predict.py',
    req.params.id,
    req.body.Color,
    req.body.Season,
    req.body.Word,
    req.body.MBTI,
    req.body.MBTI2,
  ])
  result.stdout.on('data', (result1) => {
    console.log(result1.toString())
    res.send('good')
  })
  result.stderr.on('data', (result1) => {
    console.log(result1.toString())
  })
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
