const ListItem = require('../../database/models/list_item')

const deleteItem = async (req, res) => {
  const id_item = req.params.id

  try{
      await ListItem.destroy({ where: {id: id_item} })
      res.json({status: "ok", message: "Ítem deletado com sucesso!"})

  }catch(e){
    res.json({status: "error", message: "Não foi possível deletar o ítem."})
  }
}

module.exports = deleteItem
