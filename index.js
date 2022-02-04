require('dotenv-safe').config()
const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

const info = require('./routes/info')
const login = require('./routes/users/login')
const logon = require('./routes/users/logon')
const getListAll = require('./routes/list-item/get-listItems')
const deleteItems = require('./routes/list-item/delete-items')
const createItem = require('./routes/list-item/create-item')
const updateItem = require('./routes/list-item/update-item')

app.get('/', info)

app.post  ('/logon',  logon)
app.post  ('/login',  login)
app.get   ('/list/:id',   getListAll)
app.post  ('/add',    createItem)
app.put   ('/update', updateItem)
app.delete('/delete', deleteItems)

app.listen(process.env.PORT || 3001)
