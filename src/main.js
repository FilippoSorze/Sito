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

// ---------------------------------------------------------------------------
// ENIGMA 2 (memory): stato definito FUORI dalla funzione, così sopravvive
// ogni volta che si entra e si esce dall'enigma, invece di essere ricreato.
// ---------------------------------------------------------------------------

let mazzo = []
let carteGirate = []
let bloccatoMemory = false
let mazzoGiaCreato = false // per creare il mazzo (e mescolarlo) una sola volta
let memoryCompletato = false // resta true per sempre, una volta vinto

function creaMazzo() {
  mazzo = [
    { id: 0, valore: 'foto1', scoperta: false, abbinata: false },
    { id: 1, valore: 'foto1', scoperta: false, abbinata: false },
    { id: 2, valore: 'foto2', scoperta: false, abbinata: false },
    { id: 3, valore: 'foto2', scoperta: false, abbinata: false },
    { id: 4, valore: 'foto3', scoperta: false, abbinata: false },
    { id: 5, valore: 'foto3', scoperta: false, abbinata: false },
    { id: 6, valore: 'foto4', scoperta: false, abbinata: false },
    { id: 7, valore: 'foto4', scoperta: false, abbinata: false },
    { id: 8, valore: 'foto5', scoperta: false, abbinata: false },
    { id: 9, valore: 'foto5', scoperta: false, abbinata: false },
    { id: 10, valore: 'foto6', scoperta: false, abbinata: false },
    { id: 11, valore: 'foto6', scoperta: false, abbinata: false },
    { id: 12, valore: 'foto7', scoperta: false, abbinata: false },
    { id: 13, valore: 'foto7', scoperta: false, abbinata: false },
    { id: 14, valore: 'foto8', scoperta: false, abbinata: false },
    { id: 15, valore: 'foto8', scoperta: false, abbinata: false },
    { id: 16, valore: 'foto9', scoperta: false, abbinata: false },
    { id: 17, valore: 'foto9', scoperta: false, abbinata: false },
    { id: 18, valore: 'foto10', scoperta: false, abbinata: false },
    { id: 19, valore: 'foto10', scoperta: false, abbinata: false }
  ]
  mazzo = mescola(mazzo)
}

function mescola(mazzo) {
  for (let i = mazzo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = mazzo[i]
    mazzo[i] = mazzo[j]
    mazzo[j] = temp
  }
  return mazzo
}

function disegnaMemory() {
  const stampa = mazzo.map(function (carta) {
    const classeGirata = (carta.scoperta || carta.abbinata) ? 'girata' : ''
    return `
      <div class="carta ${classeGirata}" data-id="${carta.id}">
        <div class="carta-interno">
          <div class="carta-fronte">?</div>
          <div class="carta-retro">${carta.valore}</div>
        </div>
      </div>
    `
  })

  const html = stampa.join('')
  document.querySelector('#app').innerHTML = `<div class="memory-grid">${html}</div>`
}

function mostraMessaggioVittoria() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La seconda cifra del codice è 8
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma2() {
  if (!mazzoGiaCreato) {
    creaMazzo()
    mazzoGiaCreato = true
  }
  disegnaMemory()

  // se il memory era già stato completato in precedenza, mostra subito il messaggio
  if (memoryCompletato) {
    mostraMessaggioVittoria()
  }
}

function gestisciClickCarta(elementoCarta) {
  if (bloccatoMemory) return // ignora i click mentre aspettiamo di ricoprire una coppia sbagliata

  const id = Number(elementoCarta.dataset.id)
  const cartaCliccata = mazzo.find(function (c) {
    return c.id === id
  })

  if (cartaCliccata.scoperta || cartaCliccata.abbinata) return

  cartaCliccata.scoperta = true
  carteGirate.push(cartaCliccata)
  disegnaMemory()

  if (carteGirate.length === 2) {
    const [prima, seconda] = carteGirate

    if (prima.valore === seconda.valore) {
      prima.abbinata = true
      seconda.abbinata = true
      carteGirate = []

      const tutteTrovate = mazzo.every(function (carta) {
        return carta.abbinata
      })

      if (tutteTrovate) {
        memoryCompletato = true
        setTimeout(function () {
          mostraMessaggioVittoria()
        }, 500)
      }
    } else {
      bloccatoMemory = true
      setTimeout(function () {
        prima.scoperta = false
        seconda.scoperta = false
        carteGirate = []
        bloccatoMemory = false
        disegnaMemory()
      }, 800)
    }
  }
}

// ---------------------------------------------------------------------------
// ENIGMA 1 (platform game): può ripartire da zero ogni volta, nessuna
// richiesta di persistenza per questo enigma.
// ---------------------------------------------------------------------------

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

  document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyD') tasti.destra = true
    if (event.code === 'KeyA') tasti.sinistra = true
    if (event.code === 'KeyS') tasti.sotto = true
    if (event.code === 'KeyW') tasti.sopra = true
  })

  document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyD') tasti.destra = false
    if (event.code === 'KeyA') tasti.sinistra = false
    if (event.code === 'KeyS') tasti.sotto = false
    if (event.code === 'KeyW') tasti.sopra = false
  })

  const canvas = document.querySelector('#gioco')
  const ctx = canvas.getContext('2d')

  const terra = 250
  const gravità = 0.5

  let personaggioX = 50
  let personaggioY = terra
  let velocitàY = 0

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && velocitàY === 0) {
      velocitàY = -13
    }
  })

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    velocitàY = velocitàY + gravità
    personaggioY = personaggioY + velocitàY

    if (personaggioY > terra) {
      personaggioY = terra
      velocitàY = 0
    }

    if (tasti.destra) personaggioX = personaggioX + 3
    if (tasti.sinistra) personaggioX = personaggioX - 3

    ctx.fillStyle = 'red'
    ctx.fillRect(personaggioX, personaggioY, 40, 40)
    ctx.fillStyle = 'blue'
    ctx.fillRect(piattaforma.x, piattaforma.y, piattaforma.larghezza, piattaforma.altezza)

    if (
      velocitàY >= 0 &&
      (personaggioY - velocitàY) + 40 <= piattaforma.y &&
      personaggioY + 40 >= piattaforma.y &&
      personaggioX + 40 >= piattaforma.x &&
      personaggioX <= piattaforma.x + piattaforma.larghezza
    ) {
      personaggioY = piattaforma.y - 40
      velocitàY = 0
    }

    requestAnimationFrame(loop)
  }

  loop()
}

// ---------------------------------------------------------------------------
// UNICO listener globale su #app: siccome #app non viene mai distrutto
// (solo il suo contenuto interno cambia), questo listener funziona sempre,
// indipendentemente da quante volte richiami mostraHub()/mostraEnigmaX().
// ---------------------------------------------------------------------------

document.querySelector('#app').addEventListener('click', function (event) {
  // click su "Vai alla home" nel messaggio di vittoria
  if (event.target.closest('.vai-home')) {
    mostraHub()
    return
  }

  // click su un bottone "Play" dell'hub
  const card = event.target.closest('.enigma-card')
  if (card && event.target.closest('button')) {
    const numero = card.dataset.enigma
    if (numero === '1') mostraEnigma1()
    else if (numero === '2') mostraEnigma2()
    else console.log('Enigma ' + numero + ' non ancora implementato')
    return
  }

  // click su una carta del memory
  const elementoCarta = event.target.closest('.carta')
  if (elementoCarta) {
    gestisciClickCarta(elementoCarta)
    return
  }
})

// ---------------------------------------------------------------------------
// Listener separato per la navbar: è fuori da #app, quindi serve un
// listener dedicato. Impediamo la navigazione reale del browser
// (preventDefault) e gestiamo il click via JS come per il resto del sito.
// ---------------------------------------------------------------------------

document.querySelector('.hub-nav').addEventListener('click', function (event) {
  const link = event.target.closest('a')
  if (!link) return

  event.preventDefault() // impedisce al browser di tentare di caricare "page1" ecc.

  if (link.getAttribute('href') === 'page1') {
    mostraHub()
  }
  // le altre voci (Spiegazione, Chi siamo, Contatti) non sono ancora collegate:
  // per ora un click su di esse non fa nulla, verranno gestite quando le costruirai.
})

mostraHub()