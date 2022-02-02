const users = require('../../database/models/users')

const logon = async (req, res) => {
  const {name, email, password} = req.body

    console.log(name)
      console.log(email)
        console.log(password)
  try{
    users.create({
      name,
      email,
      password
    })

    res.status(201).json({message: 'Usuário cadastrado com suceso!'})

  } catch(e){
    res.status(204).json(e)
  }

}

module.exports = logon
