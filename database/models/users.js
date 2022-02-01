const Sequelize = require('sequelize')
const database = require('../db')

const Users = database.define('users', {
  id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      alowNull: false
  },
  name: {
    type: Sequelize.STRING,
    alowNull: false
  },
  email: {
    type: Sequelize.STRING,
    alowNull: false
  },
  password: {
    type: Sequelize.STRING,
    alowNull: false
  }
},
{
  freezeTableName: true
})

module.exports = Users
