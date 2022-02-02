require('dotenv-safe').config()

const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors({origin: "*"}));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListAll = require('./routes/list-item/getList')


app.post('/login', login)
app.post('/logon', logon)
app.get('/', (req, res) => {
  return res.status(200).json({equipe: 'Programação web: equipe - Marco, Vinicus e Nathan - cors(1822)'})
})

app.get('/list', getListAll)


app.listen(process.env.PORT || 3000)
