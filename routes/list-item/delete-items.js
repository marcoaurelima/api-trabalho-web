const ListItem = require('../../database/models/list_item')

const deleteItems = (req, res) => {
  const {id_items} = req.body
  try{
    id_items.map((id)=>{
      const item = ListItem.destroy({ where: {id} })
    })
    res.json({status: "ok", message: "Ítens deletado com sucesso!"})
  }catch(e){
    res.json({status: "error", message: "Não foi possível deletar os ítens."})
  }
}
module.exports = deleteItems
