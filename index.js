// 백엔드 시작점
const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://imnhk:cEKKQQvYqkEC3rD5@cluster0.tnfbt.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false}).then(()=>console.log('mongoDB connected...')).catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))