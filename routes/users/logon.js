const users = require('../../database/models/users')

const logon = async (req, res) => {
  const {name, email, password} = req.body

  try{
    users.create({
      name,
      email,
      password
    })

    res.status(201).json({message: 'Usuário cadastrado com sucesso!'})

  } catch(e){
    res.status(204).json(e)
  }

}

module.exports = logon
