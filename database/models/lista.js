const Sequelize = require('sequelize')
const database = require('../db')

const Lista = database.define('lista', {
  id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      alowNull: false
  },
  product_name: {
    type: Sequelize.STRING,
    alowNull: false
  },
  price: {
    type: Sequelize.STRING,
    alowNull: false
  },
  qtd: {
    type: Sequelize.STRING,
    alowNull: false
  }
},
{
  freezeTableName: true
})

module.exports = Lista
