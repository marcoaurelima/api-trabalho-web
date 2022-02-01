require('dotenv-safe').config()

const express = require('express')
const app = express()
app.use(express.json())

const getListaAll = require('./routes/lista/getList')

app.get('/', (req, res) => {
  return res.status(200).json({message: 'tudo funcionando! 1822'})
})

app.get('/list', getListaAll)


app.listen(process.env.PORT || 3000)
