require('dotenv-safe').config()

var cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())

const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListAll = require('./routes/list-item/getList')


app.post('/login', login)
app.post('/logon', logon)
app.get('/', (req, res) => {
  return res.status(200).json({equipe: 'Programação web: equipe - Marco, Vinicus e Nathan - cors'})
})

app.get('/list', getListAll)


app.listen(process.env.PORT || 3000)
