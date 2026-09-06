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
    <canvas id="gioco" width="600" height="300"></canvas>
  `

  const canvas = document.querySelector('#gioco')
  const ctx = canvas.getContext('2d')

  const terra = 250 // altezza personaggio quando è a terra
  const gravità = 0.5

  let personaggioY = terra
  let velocitàY = 0

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && personaggioY === terra) {
      velocitàY = -10 //impulso verso l'alto
    }
  })

  function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) // pulisce il cancas ad ogni frame: se non lo pulisse, si avrebbe una scia di quadrati rossi
  
  velocitàY = velocitàY + gravità
  personaggioY = personaggioY + velocitàY

  if(personaggioY > terra) {
    personaggioY = terra
    velocitàY = 0
  }

  
  
  
  ctx.fillStyle = 'red'
  ctx.fillRect(50, personaggioY, 40, 40)
  
  requestAnimationFrame(loop) // chiama la funzione loop per 60 volte al secondo
}
loop()
}
document.querySelector('.bottone').addEventListener('click', mostraEnigma1)