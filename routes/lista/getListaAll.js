const user = require('../../database/models/user')

const getListaAll = async (req, res) => {
  try {
    const res = await user.findAll()
    return res.status(200).json(res)
  } catch(e){
    return res.status(404).json(e)
  }
}
module.exports = getListaAll
