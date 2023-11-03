// ELEMENTOS DE HTML

const  elijo = document.getElementById("p")
const  ocuReini = document.getElementById("back")
const  ocuAtk = document.getElementById("seCombate")
const  ocuCasilla = document.getElementById("casillita")
const  ocuResult = document.getElementById("result")
const  reBoton = document.getElementById("reini")
const  ocuPersonas  = document.getElementById("sectionVelvetRoom")
const  contenedorPersonas = document.getElementById("mainView")
const  contenedorAtaques = document.getElementById("contAtk")
const  playerPersona = document.getElementById("yourPersona")
const  personaEnemy = document.getElementById("foePersona")
const  spanPlayer = document.getElementById("vidasJugador")
const  spanEnemy = document.getElementById("vidasEnemigo")
const  pjAlt = document.getElementById("Here")
const  foeAlt = document.getElementById("HereEnemy")
const  sectionMessage = document.getElementById("resultado")
const  ataqueJugador = document.getElementById("ataqueJugador")
const  ataqueEnemigo = document.getElementById("ataqueEnemigo")
const  iconoPersona = document.getElementsByClassName("personaIcon")
const  seccionDeMapa = document.getElementById("sectionMap")
const  mapa = document.getElementById("canMap")

// ELEMENTOS DE HTML

let playerId = null
let playerRecord = 0
let personas = []
let input1
let input2
let input3
let input4
let input5
let thisIsMyPersona
let personaObject
let atkS = []
let botones = []
let playerAtk = []
let foeAtk = []
let secuenceFoe = []
let indexPlayer
let indexEnemy 
let playerWin = 0
let enemyWin = 0
let lienzo = mapa.getContext("2d")
let intervalo
let nightMap = new Image()
nightMap.src = "./assets/Models/NightMap.jpg"
let canciones = ["./audio/Persona 3 - Velvet Room.m4a",  "./audio/Lumiose City.m4a",  "./audio/Persona 5 - Last Surprise.mp3"]
let reachHeight 
let anchoDelMapa = innerWidth - 20
reachHeight = anchoDelMapa * 600 / 800


class Persona {
  constructor(nombre, foto, vidas, fotoMapa, x = 10, y = 10) {
    this.nombre = nombre
    this.foto = foto
    this.vidas = vidas
    this.atkS = []
    this.x = x
    this.y = y
    this.width = 85
    this.height = 85
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }
  paintPersona() {
   lienzo.drawImage(
    this.mapaFoto,
    this.x,
    this.y,
    this.width,
    this.height
   )
 } 
}

let jackFrost = new Persona("JackFrost", "./assets/Models/jackfrost.png", 5, "./assets/Models/joker.png")
let pixie = new Persona("Pixie", "./assets/Models/Pixie.png", 5, "./assets/Models/joker.png")
let eligor = new Persona("Eligor", "./assets/Models/Eligor.png", 5, "./assets/Models/joker.png")
let arsene = new Persona("Arsene", "./assets/Models/arsene.png", 5, "./assets/Models/joker.png")
let metaTron = new Persona("Metatron", "./assets/Models/metatron.png", 5, "./assets/Models/joker.png") 

let jackFrostEnemigo = new Persona("JackFrost", "./assets/Models/jackfrost.png", 5, "./assets/Models/jackfrost.png", aleatorio(100, 110), aleatorio(45, 100) )
let pixieEnemigo = new Persona("Pixie", "./assets/Models/Pixie.png", 5, "./assets/Models/Pixie.png", aleatorio(320, 360), aleatorio(120, 170)) 
let eligorEnemigo = new Persona("Eligor", "./assets/Models/Eligor.png", 5, "./assets/Models/Eligor.png", aleatorio(150, 190), aleatorio(250, 330))
let arseneEnemigo = new Persona("Arsene", "./assets/Models/arsene.png", 5, "./assets/Models/arsene.png", aleatorio(300, 450), aleatorio(360, 400))
let metaTronEnemigo = new Persona("Metatron", "./assets/Models/metatron.png", 5, "./assets/Models/metatron.png", aleatorio(50, 95), aleatorio(420, 470))

jackFrost.atkS.push(
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
)

pixie.atkS.push(
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
)

eligor.atkS.push(
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
)

arsene.atkS.push(
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
)

metaTron.atkS.push(
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/Models/Elec.png", id: "botonElectro" },
  {nombre: "Agi", imagen: "./assets/Models/Fire.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/Models/Ice.png", id: "botonHielo" },
)

personas.push(jackFrost, pixie, eligor, arsene, metaTron)

function launch(){ 
  elijo.addEventListener("click", eleccion)
  ocuReini.style.display = "none"
  ocuAtk.style.display = "none"
  ocuCasilla.style.display = "none"
  ocuResult.style.display = "none"
  seccionDeMapa.style.display = "none"

  personas.forEach((persona) => {
    let personasDis = `
     <input type="radio" name="demons" id=${persona.nombre} class="VelvetRoom_Check-Item"></input>
     <label class="VelvetRoom_PersonaCard" for=${persona.nombre}>
      <p class="VelvetRoom_PersonaName">${persona.nombre}</p>
      <img  src=${persona.foto} alt=${persona.nombre} class="VelvetRoom_PersonaModel">
     </label>
    `
    contenedorPersonas.innerHTML += personasDis 
    input1 = document.getElementById("JackFrost")
    input2 = document.getElementById("Pixie")
    input3 = document.getElementById("Eligor")
    input4 = document.getElementById("Arsene")
    input5 = document.getElementById("Metatron")
  })
  reBoton.addEventListener("click", reinicio)
  identificarUsuario()
  
}

function identificarUsuario() {
  fetch("http://localhost:8080/unirse")
    .then(function (res) {
       if(res.ok) {
        res.text()
          .then(function (respuesta) {
            console.log(respuesta)
            playerId = respuesta
       })
     }
  })   
}

function eleccion(){
  ocuPersonas.style.display = "none"

   switch (true) {
    case input1.checked:
      playerPersona.innerHTML = input1.id
      thisIsMyPersona = input1.id   
      break;
    case input2.checked:
      playerPersona.innerHTML = input2.id
      thisIsMyPersona = input2.id
      break;
    case input3.checked:
      playerPersona.innerHTML = input3.id
      thisIsMyPersona = input3.id
      break;
    case input4.checked:
      playerPersona.innerHTML = input4.id
      thisIsMyPersona = input4.id
      break;
    case input5.checked:
      playerPersona.innerHTML = input5.id
      thisIsMyPersona = input5.id
      break;
    default:
      alert("Elige un persona primero")
      break;
   }
   extraerAtk(thisIsMyPersona) 
   extraerAvatar(thisIsMyPersona)
   seccionDeMapa.style.display = "flex"
   renderMap()
   pcElige()
}

function extraerAtk(thisIsMyPersona){
  
  for (let i = 0; i < personas.length; i++) {
    if(thisIsMyPersona === personas[i].nombre)
      atkS = personas[i].atkS
  }
  mostrarAtk(atkS)
  console.log(thisIsMyPersona)
  postingPersona(thisIsMyPersona)
}

function extraerAvatar(thisIsMyPersona, ) {
  let playerAvatar = document.createElement("img");
  for (let i = 0; i < personas.length; i++) {
    if(thisIsMyPersona === personas[i].nombre)
      playerAvatar.src = personas[i].foto
      playerAvatar.classList.add("GridBox_Avatar")
      pjAlt.appendChild(playerAvatar)
  }          
}

function postingPersona(thisIsMyPersona) {
  fetch(`http://localhost:8080/chooseYourPersona/${playerId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      persona: thisIsMyPersona
    })
  })
}

function mostrarAtk(atkS){

  atkS.forEach((ataque) => {
    let ataqueDis = `
    <button class="Combat_personaAttack Combat_ButtonAtk" id=${ataque.id}>
     <p>${ataque.nombre}</p>
     <img src=${ataque.imagen} alt=${ataque.nombre} class="Combat_AtkLogo" />
    </button>
  `
    contenedorAtaques.innerHTML += ataqueDis 
  })
   bA = document.getElementById("botonFuego")
   bB = document.getElementById("botonHielo")
   bG = document.getElementById("botonElectro")
   botones = document.querySelectorAll(".Combat_ButtonAtk")
  
}

function pcElige(){
  let enemyAvatar = document.createElement("img");
  let aleatorioPc = aleatorio(0, personas.length -1)
  personaEnemy.innerHTML = personas[aleatorioPc].nombre
  enemyAvatar.src = personas[aleatorioPc].foto
  foeAlt.appendChild(enemyAvatar)
  enemyAvatar.classList.add("GridBox_AvatarEnemy")
  secuenceFoe = personas[aleatorioPc].atkS
  secuenciaAtk()
}

function secuenciaAtk(){
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    const textoBoton = e.target.textContent.trim()
    if(textoBoton === "Agi") {
      playerAtk.push("Agi🔥")
      enemyAproaching()
      boton.disabled = true
     } else if(textoBoton === "Bufu") {
        playerAtk.push("Bufu🧼")
        enemyAproaching()
        boton.disabled = true
      } else if(textoBoton  === "Zio") {
        playerAtk.push("Zio⚡")
        enemyAproaching()
        boton.disabled = true
        }  
    }) 
  })
  prepararCombate()  
  console.log(playerAtk)
}

function enemyAproaching() {
  let gachaFoe = aleatorio(0, secuenceFoe.length - 1);
  
  if (secuenceFoe[gachaFoe].nombre === "Agi") {
    foeAtk.push("Agi🔥")
  } else if (secuenceFoe[gachaFoe].nombre === "Bufu") {
    foeAtk.push("Bufu🧼")
  } else {
    foeAtk.push("Zio⚡")
  }
  prepararCombate() 
  console.log(foeAtk)
}

function prepararCombate() {
  if(playerAtk.length === 5) {
    combate()
  }
}

function getReady(player, foe) {
  indexPlayer = playerAtk[player]
  indexEnemy = foeAtk[foe]
}

function combate() {
  for (let index = 0; index < playerAtk.length; index++) {

    if (playerAtk[index] === foeAtk[index]) {
      getReady(index, index)
      createAmessage("EMPATE😑😒")
       } else if (playerAtk[index] === "Agi🔥" && foeAtk[index] === "Zio⚡" || playerAtk[index] === "Bufu🧼" && foeAtk[index] === "Agi🔥" || playerAtk[index] === "Zio⚡" && foeAtk[index] === "Bufu🧼") {
          getReady(index, index);
          createAmessage("GANASTE PUES😅🎉")
          playerWin++
          spanPlayer.innerHTML = playerWin;
        } else if (playerAtk[index] === "Zio⚡" && foeAtk[index] === "Agi🔥" || playerAtk[index] === "Agi🔥" && foeAtk[index] === "Bufu🧼" || playerAtk[index] === "Bufu🧼" && foeAtk[index] === "Zio⚡") {
            getReady(index, index);
            createAmessage("Perdiste😓😫")
            enemyWin++
            spanEnemy.innerHTML = enemyWin
    }
  }
  winRate()
}

function winRate(){
  if (playerWin === 3 || playerWin > enemyWin){
    createFinalMessage("GANASTE😅🎉")
    playerRecord++
   } else if  (enemyWin === 3 || enemyWin > playerWin){
      createFinalMessage("Perdiste😓😩")
     } else if (playerWin === enemyWin) {
       createFinalMessage("Empate😑🤨")
     }
   postYourKD()
   console.log(playerRecord)
}

function postYourKD(playerRecord) {
    fetch(`http://localhost:8080/yourRecords/:victorias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        victorias: playerRecord
      })
    })
}

function createAmessage(res){
  
  let nuevoAtaque1 = document.createElement("p")
  let nuevoAtaque2 = document.createElement("p")

  sectionMessage.innerHTML = res
  nuevoAtaque1.innerHTML = indexPlayer
  nuevoAtaque2.innerHTML = indexEnemy

  ataqueJugador.appendChild(nuevoAtaque1)
  ataqueEnemigo.appendChild(nuevoAtaque2)
}

function createFinalMessage(resFinal){  
  sectionMessage.innerHTML = resFinal

  
   bA.disabled = true
   
   bB.disabled = true
  
   bG.disabled = true

   let ocuReini = document.getElementById("back")
   ocuReini.style.display = "flex"
   congrats()
}

function congrats() {
  fetch("http://localhost:8080/GraciasPorJugar")
      .then(function (res) {
        if (res.ok) {
          res.text()
            .then(function (respuesta) {
              console.log(respuesta)
            })
        }
      })
}

function reinicio(){
  location.reload()
}

function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function paintTHIS() {
  personaObject.x = personaObject.x + personaObject.velocidadX
  personaObject.y = personaObject.y + personaObject.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  personaObject.mapaFoto
  lienzo.drawImage(
    nightMap,
    0,
    0,
    mapa.width,
    mapa.height
  )
  personaObject.paintPersona()
  sendPosition(personaObject.x, personaObject.y)
  jackFrostEnemigo.paintPersona()
  pixieEnemigo.paintPersona()
  eligorEnemigo.paintPersona()
  arseneEnemigo.paintPersona()
  metaTronEnemigo.paintPersona()
  if (personaObject.velocidadX !== 0 || personaObject.velocidadY !== 0) {
    crash(jackFrostEnemigo)
    crash(pixieEnemigo)
    crash(eligorEnemigo)
    crash(arseneEnemigo)
    crash(metaTronEnemigo)
  }
}

function sendPosition(x, y) {
  fetch(`http://localhost:8080/chooseYourPersona/${playerId}/position`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      x,
      y
    })
  })
}

function moveRight() {
  personaObject.velocidadX = 5
}

function moveLeft () {
  personaObject.velocidadX = - 5
}

function moveDown () {
  personaObject.velocidadY = 5
}

function moveUp () {
  personaObject.velocidadY = - 5
}

function stopMove() {
  personaObject.velocidadX = 0
  personaObject.velocidadY = 0
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moveUp()
      break
    case "ArrowDown":
      moveDown()
      break
    case "ArrowLeft":
      moveLeft()
      break
    case "ArrowRight":
      moveRight()
      break
    default:
      break
  }
}

function obtainPersonaObject() {
  for (let i = 0; i < personas.length; i++) {
    if(thisIsMyPersona === personas[i].nombre)
      return  personas[i]
  }
}

function renderMap() {
  personaObject = obtainPersonaObject()

  mapa.width = 800

  mapa.height = 600

  intervalo = setInterval(paintTHIS, 50)

  window.addEventListener("keydown", sePresionoUnaTecla)

  window.addEventListener("keyup", stopMove)

} 

function crash(enemy) {
  const enemyUp = enemy.y
  const enemyDown = enemy.y + enemy.height
  const enemyLeft = enemy.x
  const enemyRight = enemy.x + enemy.width

  const playerUp = personaObject.y
  const playerDown = personaObject.y + personaObject.height
  const playerLeft = personaObject.x
  const playerRight = personaObject.x + personaObject.width

  if(playerDown < enemyUp|| playerUp > enemyDown || playerRight < enemyLeft || playerLeft > enemyRight ) {
    return
  }
  stopMove()
  clearInterval(intervalo)
  ocuAtk.style.display = "flex"
  seccionDeMapa.style.display = "none"
  enemyAproaching(enemy)
  ocuCasilla.style.display = "grid ", "flex"
  ocuResult.style.display = "flex" 
}

function secMusic() {
  const secciones = document.getElementsByTagName("section")
  let currentAudio = null; 

  Array.from(secciones).forEach((seccion, index) => {
    let audio = document.createElement("audio")
    audio.src = canciones[index]
    audio.setAttribute("data-section", seccion.id)
    seccion.appendChild(audio)
    seccion.addEventListener("mouseenter", () => {
      document.addEventListener("click", () =>{
        if(currentAudio !== null){ 
          currentAudio.pause();
        }
        let audio = seccion.querySelector("audio")
        audio.play()
        currentAudio = audio; 
      }, { once: true })
    })
    seccion.addEventListener("mouseleave",() => {
      let audio = seccion.querySelector("audio")
      audio.pause()
    })
  })
}
window.addEventListener("load", secMusic)

window.addEventListener("load", launch)

