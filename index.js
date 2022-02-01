require('dotenv-safe').config()

const express = require('express')
const app = express()
app.use(express.json())

const login = require('./routes/users/login')
const getListaAll = require('./routes/lista/getList')


app.post('/login', login)

app.get('/', (req, res) => {
  return res.status(200).json({cadeira: 'Programação web'})
})

app.get('/list', getListaAll)


app.listen(process.env.PORT || 3000)
