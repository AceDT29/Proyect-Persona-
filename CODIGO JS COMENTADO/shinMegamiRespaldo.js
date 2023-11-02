// ELEMENTOS DE HTML

const  elijo = document.getElementById("p")
const  ocuReini = document.getElementById("back")
const  ocuAtk = document.getElementById("seCombate")
const  ocuCasilla = document.getElementById("casillita")
const  ocuResult = document.getElementById("result")
const  reBoton = document.getElementById("reini")
const  ocuPersonas  = document.getElementById("Selecion-De-personas")
const  contenedorPersonas = document.getElementById("mainView")
const  contenedorAtaques = document.getElementById("contAtk")
const  playerPersona = document.getElementById("yourPersona")
const  personaEnemy = document.getElementById("foePersona")
const  spanPlayer = document.getElementById("vidasJugador")
const  spanEnemy = document.getElementById("vidasEnemigo")
const  sectionMessage = document.getElementById("resultado")
const  ataqueJugador = document.getElementById("ataqueJugador")
const  ataqueEnemigo = document.getElementById("ataqueEnemigo")
const  iconoPersona = document.getElementsByClassName("personaIcon")
const  seccionDeMapa = document.getElementById("sectionMap")
const  mapa = document.getElementById("canMap")

// ELEMENTOS DE HTML

// VARIABLES GLOBALES

let personas = []
let input1
let input2
let input3
let input4
let input5
let thisIsMyPersona
let bA 
let bB 
let bG 
let ataques = []
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

// VARIABLES GLOBALES

class Persona {

// CONSTRUCTOR DE ELEMENTOS: Funcion especificamente creada para servir de plantilla para agregar, iterar y utilizar valores antes establecidos por la logica del construtor, ejemplo: Persona.foto accede al png asignado a ese objeto.

  constructor(nombre, foto, vidas){
    this.nombre = nombre
    this.foto = foto
    this.vidas = vidas
    this.ataques = []
    this.x = 30
    this.y = 40
    this.width = 80
    this.height = 80
    this.mapaFoto = new Image();
    this.mapaFoto.src = foto
    this.velocidadX = 0
    this.velocidadY = 0
  }
}

// OBJETOS: Sigen la logica de declaracion preescrita en el constructor, manipular utilizando arrays

let jackFrost = new Persona("JackFrost", "./assets/jackfrost.png", 5)
let pixie = new Persona("Pixie", "./assets/Pixie_29.png", 5)
let eligor = new Persona("Eligor", "./assets/Eligor_29.png", 5)
let arsene = new Persona("Arsene", "./assets/arsene.png", 5)
let metaTron = new Persona("Metatron", "./assets/metatron.png", 5)

// OBJETOS

// ATRIBUTOS Y PUSH: los atributos son variables previamente declaradas en el constructor que hacen referencia a valores a los cuales deben guardarse en un array con .push para poder acceder a su contenido o iterar al rededor de el.


jackFrost.ataques.push(
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
)

pixie.ataques.push(
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
)

eligor.ataques.push(
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
)

arsene.ataques.push(
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
)

metaTron.ataques.push(
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Zio", imagen: "./assets/elec.com-1859443.png", id: "botonElectro" },
  {nombre: "Agi", imagen: "./assets/pngaaa.com-1859443.png", id: "botonFuego" },
  {nombre: "Bufu", imagen: "./assets/ice.com-1859443.png", id: "botonHielo" },
)

personas.push(jackFrost, pixie, eligor, arsene, metaTron)

// ATRIBUTOS Y PUSH

// FUNCIONES: A este punto el codigo pasara y ejecutara ciertas funciones que se encargaran de llevar a cabo acada secuencia del juego, como cargar los elementos HTML para su uso, ocultar y desplegar secciones de la pagina, iterar con array y agregar valores a las variables globales en funcion de que casos o situacion.


function launch(){ 

 // La funcion launch es invocada al principio de la ejecucion por medio de un evento load en el window, su funcion es cargar  debidamente los elementos HTML en javascript

  elijo.addEventListener("click", eleccion)

  ocuReini.style.display = "none"

  ocuAtk.style.display = "none"

  ocuCasilla.style.display = "none"

  ocuResult.style.display = "none"

  seccionDeMapa.style.display = "none"

  // TEMPLATES: Platillas que nos permiten clonar un estructura y lograr asi mostrar de forma automatica y utilizando unicamentente como fuente de informacion nuestros objetos.

  personas.forEach((persona) => {
    // El metodo forEach nos permite que por cada persona que exista en "personas[]" agrege esta estructura tomando los datos correspondientes de persona.nombre (ejem: jackfrost.nombre) y asignar el valor del match, luego hacer un innerHTML al contenedor de los templates para mostrarlos en pantalla, 
    let personasDis = `
     <input type="radio" name="demons" id=${persona.nombre}></input>
     <label class="tarjetitas-persona" for=${persona.nombre}>
      <p>${persona.nombre}</p>
      <img src=${persona.foto} alt=${persona.nombre}>
     </label>
    `
    contenedorPersonas.innerHTML += personasDis

   // Aca asignamos un valor a las variables input, que nos servira para validar que persona escogiste.

    input1 = document.getElementById("JackFrost")
    input2 = document.getElementById("Pixie")
    input3 = document.getElementById("Eligor")
    input4 = document.getElementById("Arsene")
    input5 = document.getElementById("Metatron")
  })

  reBoton.addEventListener("click", reinicio)
}

function eleccion(){

// Ocultamos ciertas secciones del codigo luego de elegido el persona al que clickaste, para dar paso a la seccion del mapa del juego 

  ocuPersonas.style.display = "none"
  
  //ocuAtk.style.display = "flex"
 
  //ocuCasilla.style.display = "grid ", "flex"

  //ocuResult.style.display = "flex"

  seccionDeMapa.style.display = "flex"
  
  intervalo = setInterval(paintTHIS, 50)
 
// validacion de tu persona: Para lograr que juegues con el persona que escogiste primero debemos pasar por una validacion if la cual verificara el input.id el cual corresponde al nombre que se le asigne a nuestro persona en los objetos

   if(input1.checked){
    // en caso de que el input1.id haga match con el nombre del primer persona, inseertaremos ese id/nombre en la casilla de puntaje y este sera el personaje visible de nuestro jugador, y acontinuacion  se le asignara ese nombre/id a thisIsMyPersona para poder iterar y trabajar la variable cuando se requiera, ayudara a acceder a los ataques de nuestro persona selecionado. lo mismo aplica para las demas validaciones else if.
      playerPersona.innerHTML = input1.id
        thisIsMyPersona = input1.id
      } else if (input2.checked){
         playerPersona.innerHTML = input2.id
         thisIsMyPersona = input2.id
       } else if (input3.checked){
         playerPersona.innerHTML = input3.id
         thisIsMyPersona =  input3.id
          } else if (input4.checked) {
             playerPersona.innerHTML = input4.id
             thisIsMyPersona = input4.id
             } else if(input5.checked) {
                playerPersona.innerHTML = input5.id
                thisIsMyPersona = input5.id
                 } else {
                  
                  alert("Elige un persona primero🙄")
                 }
   extraerAtk(thisIsMyPersona)
   pcElige()
}

function extraerAtk(thisIsMyPersona){
  
  for (let i = 0; i < personas.length; i++) {
    if(thisIsMyPersona === personas[i].nombre)
      ataques = personas[i].ataques
  }
  mostrarAtk(ataques)
}

function mostrarAtk(ataques){

  ataques.forEach((ataque) => {
    let ataqueDis = `
    <button class="personaAttack BotonAtk" id=${ataque.id}>
     <p>${ataque.nombre}</p>
     <img src=${ataque.imagen} alt=${ataque.nombre} />
    </button>
  `
    contenedorAtaques.innerHTML += ataqueDis 
 
  })
   bA = document.getElementById("botonFuego")
   bB = document.getElementById("botonHielo")
   bG = document.getElementById("botonElectro")
   botones = document.querySelectorAll(".BotonAtk")
  
}

function pcElige(){
  let aleatorioPc = aleatorio(0, personas.length -1)

  personaEnemy.innerHTML = personas[aleatorioPc].nombre
  secuenceFoe = personas[aleatorioPc].ataques
  secuenciaAtk()
}

function secuenciaAtk(){
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    const textoBoton = e.target.textContent.trim()
    if(textoBoton === "Agi"){
      playerAtk.push("Agi")
      boton.disabled = true
     } else if(textoBoton === "Bufu"){
        playerAtk.push("Bufu")
        boton.disabled = true
      } else if(textoBoton  === "Zio") {
        playerAtk.push("Zio")
        boton.disabled = true
        }
  console.log(playerAtk)  
  enemyAproaching()
    }) 
  })
}

function enemyAproaching() {
  let gachaFoe = aleatorio(0, secuenceFoe.length - 1);
  
  if (secuenceFoe[gachaFoe].nombre === "Agi") {
    foeAtk.push("Agi")
  } else if (secuenceFoe[gachaFoe].nombre === "Bufu") {
    foeAtk.push("Bufu")
  } else {
    foeAtk.push("Zio")
  }
  
  console.log(foeAtk)
  prepararCombate() 
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
    if (playerAtk[index] === secuenceFoe[index]) {
      getReady(index, index)
      createAmessage("EMPATE😑😒")
    } else if (playerAtk[index] === "Agi" && foeAtk[index] === "Zio" || playerAtk[index] === "Bufu" && foeAtk[index] === "Agi" || playerAtk[index] === "Zio" && foeAtk[index] === "Bufu") {
      getReady(index, index);
      createAmessage("GANASTE PUES😅🎉")
      playerWin++
      spanPlayer.innerHTML = playerWin;
    } else if (playerAtk[index] === "Zio" && foeAtk[index] === "Agi" || playerAtk[index] === "Agi" && foeAtk[index] === "Bufu" || playerAtk[index] === "Bufu" && foeAtk[index] === "Zio") {
      getReady(index, index);
      createAmessage("Perdiste😓😫")
      enemyWin++
      spanEnemy.innerHTML = enemyWin
    } else {
      getReady(index, index);
      createAmessage("EMPATE😑😒")
    }
  }
  winRate()
}

function winRate(){
  if (playerWin === 3 || playerWin > enemyWin){
    createFinalMessage("YA GANASTE PUES😅🎉")
   } else if  (enemyWin === 3 || enemyWin > playerWin){
      createFinalMessage("Osea perdiste ya pues😓😩")
     } 
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
}

function reinicio(){
  location.reload()
}

function aleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function paintTHIS() {
  jackFrost.x = jackFrost.x + jackFrost.velocidadX
  jackFrost.y = jackFrost.y + jackFrost.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  jackFrost.mapaFoto
  lienzo.drawImage(
    jackFrost.mapaFoto,
    jackFrost.x,
    jackFrost.y,
    jackFrost.width,
    jackFrost.height
  )
}

function moveRight() {
  jackFrost.velocidadX = 5
}

function moveLeft () {
  jackFrost.velocidadX = - 5
}

function moveDown () {
  jackFrost.velocidadY = 5
}

function moveUp () {
  jackFrost.velocidadY = - 5
}

function stopMove() {
  jackFrost.velocidadX = 0
  jackFrost.velocidadY = 0
}

window.addEventListener("load", launch)
