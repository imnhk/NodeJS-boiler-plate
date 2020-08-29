// 백엔드 시작점
// NodeJS의 require는 module을 추가하는 기능
// ./로 시작하는 js 스크립트를 실행하여 추가하거나
// node_modules 의 dependency를 불러올 수 있다

// Express는 NodeJS의 사용을 쉽게 하는 프레임워크
const express = require('express')
const app = express()

const port = 5000

const bodyParser = require('body-parser')
// application/x-www-from-urlencoded 형태를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
// application/json 형태를 분석해서 가져옴
app.use(bodyParser.json())

const {user} = require("./models/user")


// MongoDB에 연결을 도와주는 
// mongodb object modeling
const mongoose = require('mongoose')
// 연결.
// 이 연결 ID, PW를 그대로 GitHib 등에 공개되지 않도록 해야 한다.
mongoose.connect('mongodb+srv://imnhk:cEKKQQvYqkEC3rD5@cluster0.tnfbt.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false}).then(()=>console.log('mongoDB connected...')).catch(err => console.log(err))



// 회원가입을 위한 Route
app.post('/register', (req, res) => {
    // 클라이언트에서 보내주는 이름, pw 등의 정보를 가져온다
    console.log(req.body)

    // user.js 모델에 저장
    const userModel = new user(req.body)

    // mongoDB 저장
    userModel.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        }) 
    })

    // DB에 저장한다
})

// nodemon으로 소스코드 변화를 자동으로 적용

app.get('/', (req, res) => res.send('Hello world!!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))