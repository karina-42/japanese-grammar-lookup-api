const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 4000

const grammar = {
  'だけ': {
    japanese: 'だけ',
    meaning: '限定を表す',
    exampleSentence: '毎日20分あるくだけの軽い運動をしている。'
  },
  'ばかり': {
    japanese: 'ばかり',
    meaning: '同じもの、同じことが多い、マイナスイメージ',
    exampleSentence: 'この頃私は失敗ばかりしている。'
  },
  'さえ': {
    japanese: 'さえ',
    meaning: '必要　十分　条件　（さえ～ば/なら）',
    exampleSentence: '年をとっても、体さえ丈夫なら心配はいらない。'
  },
  'しか': {
    japanese: 'しか',
    meaning: 'ほかにない、と強調する　（しか～ない）',
    exampleSentence: 'だれも手伝ってくれない。一人でがんばるしかない。'
  },
  'も': {
    japanese: 'も',
    meaning: '多という気持',
    example: '学校まで毎日2時間もかかる。'
  },
  'ない': {
    japanese: 'none',
    meaning: 'none',
    exampleSentence: 'make an entry yourself'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
  res.json(grammar)
})

app.get('/api/:lookedUpGrammar', (req, res) => {
  const reqGrammar = req.params.lookedUpGrammar.toLowerCase()
  if(grammar[reqGrammar]) {
    res.json(grammar[reqGrammar])
  } else {
    res.json(grammar['none'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`catch your server at port ${PORT}`);
})