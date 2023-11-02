const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const jugadores = []

class Jugador {
   constructor(id) {
      this.id = id
      this.wins
  }
  asingPersona(persona) {
    this.persona = persona
  }
  asignPosition(x, y) {
    this.x = x
    this.y = y
  }
}

class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }
}

class WinRecord {
  constructor(victorias) {
    this.victorias = victorias
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`
  const jugador = new Jugador(id)
  jugadores.push(jugador)
  res.setHeader("Access-Control-Allow-Origin", "*") 
  res.send(id)
})

app.get("/GraciasPorJugar", (req, res) => {
  const mensaje = `Felicidades, gracias por jugar`
  res.send(mensaje)
})

app.post("/chooseYourPersona/:playerId", (req, res) => {
  const playerId = req.params.playerId || ""
  const nombre = req.body.persona || ""
  const persona = new Persona(nombre)
  const playerIndex = jugadores.findIndex((jugador) => playerId === jugador.id)
  if(playerIndex >= 0 ) {
    jugadores[playerIndex].asingPersona(persona)
  }
  console.log(jugadores)
  res.end()
})

app.post("/chooseYourPersona/:playerId/position", (req, res) => {
  const playerId = req.params.playerId || ""
  const x = req.body.x || ""
  const y = req.body.y || ""
  const playerIndex = jugadores.findIndex((jugador) => playerId === jugador.id)

  if(playerIndex >= 0 ) {
    jugadores[playerIndex].asignPosition(x, y)
  }
 res.end()
})

app.post("/yourRecords/:victorias", (req, res) => {
  const victorias = req.body.victorias || "0"
  const victoryCount = new WinRecord(victorias)
  console.log(victoryCount)
  res.end()
})

app.listen(8080, () => {
    console.log("HOLI YA FUNCIONANDO EL SERVIDOR")
})

