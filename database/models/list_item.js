const Sequelize = require('sequelize')
const database = require('../db')

const ListItem = database.define('list_item', {
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
  },
  id_user: {
    type: Sequelize.INTEGER,
    alowNull: false
  }
},
{
  freezeTableName: true
})

module.exports = ListItem
