const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({message: 'tudo funcionando! 1610'})
})

app.listen(process.env.PORT || 3000)
