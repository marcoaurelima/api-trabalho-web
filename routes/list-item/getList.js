const ListItem = require('../../database/models/list_item')

const getListaAll = async (req, res) => {
  const {id_user} = req.body
  try{
    const response = await ListItem.findAll({
      where: {
        id_user
      }
    })
    res.status(200).json(response)
  }catch(e){
      res.status(204).json({message: 'Nada encontrado!'})
    }
}
module.exports = getListaAll
