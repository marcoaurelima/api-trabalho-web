const info = (req, res) => {
  res.json({
    projeto: "Trabalho final de Web",
    equipe: "Marco, Vinícius e Natan",
    ultima_alteraçao_API: "04/02/2022 12:44"
  })
}

module.exports = info
