require('dotenv-safe').config()

const express = require('express')
const app = express()
app.use(express.json())

const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListaAll = require('./routes/lista/getList')


app.post('/login', login)
app.post('/logon', logon)
app.get('/', (req, res) => {
  return res.status(200).json({cadeira: 'Programação web: equipe - Marco, Vinicus e Nathan'})
})

app.get('/list', getListaAll)


app.listen(process.env.PORT || 3000)
