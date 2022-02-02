require('dotenv-safe').config()

const express = require('express')
const app = express()

var cors = require('cors');
app.use(cors());
app.use(express.json())

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListAll = require('./routes/list-item/getList')


app.post('/login', login)
app.post('/logon', logon)
app.get('/', (req, res) => {
  return res.status(200).json({equipe: 'Programação web: equipe - Marco, Vinicus e Nathan - cors(correto)'})
})

app.get('/list', getListAll)


app.listen(process.env.PORT || 3001)
