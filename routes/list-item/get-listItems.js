const ListItem = require('../../database/models/list_item')

const getListaAll = async (req, res) => {
  const {id_user} = req.body

  try{
    const response = await ListItem.findAll({
      where: {
        id_user
      }
    })
    res.json(response)

  }catch(e){
    res.json({status: 'error', message: 'Nada encontrado!'})
  }
}

module.exports = getListaAll
