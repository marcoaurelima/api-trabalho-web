const info = (req, res) => {
  res.json({
    projeto: "Trabalho final de Web",
    equipe: "Marco, Vinícius e Natan",
    ultima_alteraçao_API: "04/02/2022 1124"
  })
}

module.exports = info
