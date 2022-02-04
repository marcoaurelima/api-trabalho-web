const ListItem = require('../../database/models/list_item')

const deleteItems = async (req, res) => {
  const {id_items} = req.body

  res.json({'req.body': req.body})
  /*

  try{
    id_items.map(async (id)=>{
      await ListItem.destroy({ where: {id} })
    })
    res.json({status: "ok", message: "Ítens deletados com sucesso!"})

  }catch(e){
    res.json({status: "error", message: "Não foi possível deletar os ítens."})
  }
  */
}

module.exports = deleteItems
