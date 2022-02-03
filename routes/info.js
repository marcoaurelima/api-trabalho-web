const info = (req, res) => {
  res.json({
    projeto: "Trabalho final de Web",
    equipe: "Marco, Vinícius e Natan",
    ultima_alteraçao_API: "03/02/2022 16:35"
  })
}

module.exports = info
