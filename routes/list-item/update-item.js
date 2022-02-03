const ListItem = require('../../database/models/list_item')

const updateItem = async (req, res)=> {
  const {id, product_name, price, qtd} = req.body

  try {
    const item = await ListItem.findByPk(id)

    item.id = id
    item.product_name = product_name
    item.price = price
    item.qtd = qtd

    await item.save()

    res.json({status: 'ok', message: 'Ítem alterado com sucesso!'})
  } catch(e){
    res.json({status: 'error', message: 'Não foi possível alterar o ítem.'})
  }
}

module.exports = updateItem
