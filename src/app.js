// @ts-check

/* eslint-disable no-console */
const express = require('express')
const { spawn } = require('child_process')

const app = express()
const animalLabel = ['고양이', '강아지', '공룡', '여우', '토끼']
app.use(express.json())
app.use(express.urlencoded())
app.set('views', 'src/views')
app.set('view engine', 'pug')

const FLOWERS = [
  '',
  '까마귀쪽나무',
  '좊은잎천선과',
  '문주란',
  '참식나무',
  '제주조릿대',
  '자귀나무',
  '산유자',
  '초피나무',
  '메밀',
  '꾸찌뽕나무',
  '구실잣밤나무',
  '멀구슬나무',
  '예덕나무',
  '차풀',
  '합다리나무',
  '쪽동백나무',
  '율초',
  '붉가시나무',
  '다정큼나무',
  '돈나무',
  '팔손이',
  '큰조롱',
  '상산',
  '대반하',
  '털쇠무릅',
  '돌외',
  '등수국',
  '병솔나무',
  '비쭈기나무',
  '삼백초(2급)',
  '생달나무',
  '섬오갈피',
  '소사나무',
  '솔비나무',
  '말오줌때',
  '눈개승마',
  '송악',
  '우묵사스레피',
  '조록나무',
  '순비기나무',
  '참꽃나무',
  '갯까치수염',
  '참가시나무',
  '서어나무',
  '아왜나무',
  '황근(2급)',
  '황칠나무',
  '해국',
  '왜모시풀',
  '비자나무',
  '한라꽃향유',
  '붓순나무',
  '백량금',
  '갯기름나물',
  '담팥수',
  '참취',
  '번행초',
  '(참)당귀',
  '사방오리나무',
  '꽝꽝나무',
]

app.get('/', (req, res) => {
  console.log('사용자 접속!')
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
    const answer = data.toString()
    console.log(`가장 닮은 동물은 ${animalLabel[Number(answer)]} 입니다.`)
    res.render('question', {
      nextURL: `/answer/${data.toString()}`,
    })
  })
  result.stderr.on('data', (data) => {
    console.log('AI가 분석 중 입니다 ...')
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
  result.stdout.on('data', (data) => {
    const answer = data.toString()
    console.log(`가장 어울리는 식물은 ${FLOWERS[Number(answer)]} 입니다.`)
    res.redirect(`/result/${answer}`)
  })
  result.stderr.on('data', (data) => {
    console.log('AI가 분석 중 입니다 ...')
  })
})

app.get('/result/:no', (req, res) => {
  const num = req.params.no
  const no = Number(num)
  console.log('결과가 나왔습니다. 키오스크에서 씨앗이 나옵니다.')
  res.render('result', {
    no,
    name: FLOWERS[no],
    imgURL: `/upload/flower/${no}${FLOWERS[no]}.jpg`,
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
