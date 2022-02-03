const ListItem = require('../../database/models/list_item')

const createItem = async (req, res) => {
  const {product_name, price, qtd, id_user} = req.body
  const result = await ListItem.create({
    product_name,
    price,
    qtd,
    id_user
  })
  res.json({status: 'ok', message: 'Item adicionado com sucesso!'})
}

module.exports = createItem
