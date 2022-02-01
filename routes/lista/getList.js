const lists = require('../../database/models/lists')

const getListaAll = async (req, res) => {
  const {id_user} = req.body
  try {
    const response = await lists.findAll({
      where: {
        id_user
      }
    })
    res.status(200).json(response)
  } catch(e){
    res.status(404).json(e)
  }
}
module.exports = getListaAll
