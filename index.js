require('dotenv-safe').config()

const express = require('express')

const app = express()
app.use(express.json())
var cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListAll = require('./routes/list-item/getListItems')

app.get('/', (req, res) => {
  return res.status(200).json({equipe: 'Programação web: equipe - Marco, Vinicus e Nathan - cors(1)'})
})

app.post('/login', login)
app.post('/logon', logon)
app.get('/list', getListAll)


app.listen(process.env.PORT || 3001)
