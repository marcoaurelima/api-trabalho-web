const Sequelize = require('sequelize')
const database = require('../db')

const Lists = database.define('lists', {
  id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      alowNull: false
  },
  id_user:{
      type: Sequelize.INTEGER,
      alowNull: false
  },
  id_item: {
    type: Sequelize.INTEGER,
    alowNull: false
  }
},
{
  freezeTableName: true
})

module.exports = Lists
