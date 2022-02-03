const users = require('../../database/models/users')

const logon = async (req, res) => {
  const {name, email, password} = req.body

  try{
    users.create({
      name,
      email,
      password
    })

    res.json({status: 'ok', message: 'Usuário cadastrado com sucesso!'})

  } catch(e){
    res.json({status: 'error', e})
  }

}

module.exports = logon
