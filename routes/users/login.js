const users = require('../../database/models/users')

const login = async (req, res) => {
  console.log("req.body", req.body)
  const {email, password} = req.body

    const response = await users.findAll({
      where: {
        email,
        password
      }
    })

    if(response.length === 0){
      res.status(403).json({auth: false, message: 'Usuário ou senha inválidos.'})
      return
    }

    const id_user =  response[0].dataValues.id
    res.status(200).json({auth: true, id_user})

}

module.exports = login
