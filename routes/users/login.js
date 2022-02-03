const users = require('../../database/models/users')

const login = async (req, res) => {
  const {email, password} = req.body

  try{
    const response = await users.findAll({
      where: {
        email,
        password
      }
    })

    if(response.length === 0){
      res.json({auth: false, message: 'Usuário ou senha inválidos.'})
      return
    }

    const id_user =  response[0].dataValues.id
    res.json({auth: true, id_user})

  } catch(e){
    res.json(e)
  }
}

module.exports = login
