const users = require('../../database/models/users')

const getListaAll = async (req, res) => {
  try {
    const res = await users.findAll()
    return res.status(200).json(res)
  } catch(e){
    return res.status(404).json(e)
  }
}
module.exports = getListaAll
