import './style.css'

function mostraHub() {
document.querySelector('#app').innerHTML = `
  <header class="hub-header">
    <h1 class="titolo">Titolo</h1>
  </header>

    <main class="enigma-grid">
    <div class="enigma-card" data-enigma="1"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 1</div><button class="bottone">Play</button></div>
    <div class="enigma-card" data-enigma="2"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 2</div><button class="bottone">Play</button></div>
    <div class="enigma-card" data-enigma="3"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 3</div><button class="bottone">Play</button></div>
    <div class="enigma-card" data-enigma="4"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 4</div><button class="bottone">Play</button></div>
    <div class="enigma-card" data-enigma="5"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 5</div><button class="bottone">Play</button></div>
    <div class="enigma-card" data-enigma="6"><img src="https://picsum.photos/200" alt="Logo" class="logoEnigma" /><div class="nomeEnigma">Enigma 6</div><button class="bottone">Play</button></div>
  </main>
`

}

mostraHub()
function mostraEnigma1() {
  document.querySelector('#app').innerHTML = `
    <canvas id="gioco" width="2000" height="500"></canvas>
  `
  const tasti = {
    destra: false,
    sinistra: false,
    sotto: false,
    sopra: false
  }

   const piattaforma = {
    x: 300,
    y: 200,
    larghezza: 100,
    altezza: 20
  }

  document.addEventListener('keydown', (event) =>{
    if(event.code === 'KeyD') tasti.destra = true
    if(event.code === 'KeyA') tasti.sinistra = true
    if(event.code === 'KeyS') tasti.sotto = true
    if(event.code === 'KeyW') tasti.sopra = true

  })

  
  document.addEventListener('keyup', (event) =>{
    if(event.code === 'KeyD') tasti.destra = false
    if(event.code === 'KeyA') tasti.sinistra = false
    if(event.code === 'KeyS') tasti.sotto = false
    if(event.code === 'KeyW') tasti.sopra = false

    console.log(event.code)
  })



  const canvas = document.querySelector('#gioco')
  const ctx = canvas.getContext('2d')

  const terra = 250 // altezza personaggio quando è a terra
  const gravità = 0.5
  const velocitàScroll = 3 // velocità di scorrimento dello sfondo

  let personaggioX = 50
  let personaggioY = terra
  let velocitàY = 0
  let gameOver = false

  let piattaforme = [
    { x: 300, y: 200, larghezza: 100, altezza: 20 },
    { x: 500, y: 150, larghezza: 100, altezza: 60 },
    { x: 700, y: 250, larghezza: 100, altezza: 40 }
  ]

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && velocitàY === 0) {
      velocitàY = -13 //impulso verso l'alto
    }
  })


  function disegnaPiattaforme() {
    ctx.fillStyle = 'blue'
    piattaforme.forEach(piattaforma => {
      ctx.fillRect(piattaforma.x, piattaforma.y, piattaforma.larghezza, piattaforma.altezza)
    })
  }

  function creaPiattaforma() {
    const larghezza = 60 + Math.random() * 100
    const altezza = 120 + Math.random() * 80

    return {
      x: canvas.width + 50,
      y: y,
      larghezza: larghezza,
      altezza: 20
    }
  }




  function loop() {
    if(gameOver) {
      ctx.fillStyle = 'black'
      ctx.font = '50px Arial'
      ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2)
      return
    }
  ctx.clearRect(0, 0, canvas.width, canvas.height) // pulisce il cancas ad ogni frame: se non lo pulisse, si avrebbe una scia di quadrati rossi
  
  velocitàY = velocitàY + gravità
  personaggioY = personaggioY + velocitàY

  if(personaggioY > terra) {
    personaggioY = terra
    velocitàY = 0
  }



  if (tasti.destra) personaggioX = personaggioX + 3
  if (tasti.sinistra) personaggioX = personaggioX - 3
  if (tasti.sotto) velocitàY = velocitàY + 3
  if (tasti.sopra) velocitàY = velocitàY - 3



  
  
  
  ctx.fillStyle = 'red'
  ctx.fillRect(personaggioX, personaggioY, 40, 40)
  disegnaPiattaforme()

if (
  velocitàY >= 0 &&
  (personaggioY - velocitàY) + 40 <= piattaforma.y &&   // prima eri sopra il tetto
  personaggioY + 40 >= piattaforma.y &&                    // ora lo hai raggiunto/superato
  personaggioX + 40 >= piattaforma.x &&
  personaggioX <= piattaforma.x + piattaforma.larghezza
) {
  personaggioY = piattaforma.y - 40
  velocitàY = 0
}
  requestAnimationFrame(loop) // chiama la funzione loop per 60 volte al secondo
 
}
loop()
}
document.querySelector('.bottone').addEventListener('click', mostraEnigma1)