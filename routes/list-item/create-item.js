const ListItem = require('../../database/models/list_item')

const createItem = async (req, res) => {
  const {product_name, price, qtd, id_user} = req.body

  try{
    await ListItem.create({
      product_name,
      price,
      qtd,
      id_user
    })
    res.json({status: 'ok', message: 'Item criado com sucesso!'})
    
  }catch(e){
    res.json({status: 'ok', message: 'Não foi possível criar item.'})
  }

}

module.exports = createItem
