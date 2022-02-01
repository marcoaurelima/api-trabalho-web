require('dotenv').config
const express = require('express')
const app = express()
app.use(express.json())

const getListaAll = require('./routes/lista/getListaAll')

app.get('/', (req, res) => {
  return res.status(200).json({message: 'tudo funcionando! 1734'})
})

app.get('/lista', getListaAll)


app.listen(process.env.PORT || 3000)
