import './style.css'

// =============================================================================
// PAGINA "SPIEGAZIONE": spiega a lei come funziona il sito, prima che inizi
// a giocare. Contenuto generico (le regole del gioco), nessun placeholder
// da personalizzare qui — se vuoi cambiare qualche frase, modifica pure il
// testo qui sotto.
// =============================================================================

function mostraSpiegazione() {
  document.querySelector('#app').innerHTML = `
    <div class="pagina-spiegazione">
      <h1>Come funziona</h1>

      <p>Nella home trovi <strong>6 enigmi</strong>. Ogni enigma è un piccolo gioco diverso dagli altri: un puzzle fotografico, un memory, un quiz, una linea del tempo, delle frasi da completare e una cassaforte da aprire.</p>

      <p>Risolvendo un enigma, alla fine ti verrà mostrata <strong>una cifra</strong> di un codice segreto a 6 numeri. Ogni enigma rivela una cifra diversa, in base alla sua posizione: il primo enigma dà la prima cifra, il secondo la seconda, e così via.</p>

      <p>Il tuo progresso resta salvato: puoi tornare alla home in qualsiasi momento e rientrare in un enigma già risolto senza perdere nulla.</p>

      <p>Quando avrai raccolto <strong>tutte e 6 le cifre</strong>, torna nella home e inseriscile nel campo apposito, in fondo alla pagina, sotto gli enigmi. Se il codice è corretto... si apre qualcosa di speciale.</p>

      <p>Buon divertimento! ❤</p>

      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

// =============================================================================
// PAGINA "CHI SIAMO": contenuto personale su di voi due.
//
// *** DA PERSONALIZZARE ***: fotoChiSiamo (una vostra foto vera) e
// testoChiSiamo (raccontate chi siete, da quanto state insieme, ecc.).
// =============================================================================

const fotoChiSiamo = 'https://picsum.photos/500?random=200'
const testoChiSiamo = `
  [TESTO DA PERSONALIZZARE — raccontate chi siete: i vostri nomi, da quanto
  tempo state insieme, qualcosa che vi rappresenta come coppia. Puoi scrivere
  più paragrafi, basta andare a capo qui dentro.]
`

function mostraChiSiamo() {
  document.querySelector('#app').innerHTML = `
    <div class="pagina-chi-siamo">
      <h1>Chi siamo</h1>
      <div class="foto-chi-siamo-container">
        <img src="${fotoChiSiamo}" class="foto-chi-siamo" alt="Noi due" />
      </div>
      <p class="testo-chi-siamo">${testoChiSiamo}</p>
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

// =============================================================================
// PAGINA "CONTATTI": dove trovarti/contattarti (email, social, numero...).
//
// *** DA PERSONALIZZARE ***: i valori in "contatti" sotto — metti solo
// quelli che vuoi mostrare, puoi anche rimuovere le righe che non ti servono.
// =============================================================================

const contatti = [
  { etichetta: 'Email', valore: '[EMAIL DA PERSONALIZZARE]' },
  { etichetta: 'Instagram', valore: '[PROFILO INSTAGRAM DA PERSONALIZZARE]' },
  { etichetta: 'Telefono', valore: '[NUMERO DA PERSONALIZZARE]' }
]

// =============================================================================
// PAGINA "COSE": un cestino da picnic con dentro vari oggetti. Passando il
// mouse su un oggetto (tooltip in puro CSS, come per i puntini dei viaggi)
// appare una spiegazione di cosa è o cosa significa.
//
// *** DA PERSONALIZZARE ***: modifica/aggiungi oggetti in "oggettiCestino" —
// nome, immagine (sostituisci con le foto vere degli oggetti), posizione
// (top/left in percentuale, rispetto al riquadro del cestino) e la
// spiegazione. Idealmente "immagineCestino" dovrebbe essere un'immagine del
// cestino con sfondo trasparente (PNG), così gli oggetti sembrano dentro.
// =============================================================================

const immagineCestino = 'https://picsum.photos/500?random=300'

const oggettiCestino = [
  { nome: 'Oggetto 1', immagine: 'https://picsum.photos/100?random=301', top: 15, left: 25, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 2', immagine: 'https://picsum.photos/100?random=302', top: 18, left: 50, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 3', immagine: 'https://picsum.photos/100?random=303', top: 22, left: 75, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 4', immagine: 'https://picsum.photos/100?random=304', top: 32, left: 15, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 5', immagine: 'https://picsum.photos/100?random=305', top: 35, left: 38, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 6', immagine: 'https://picsum.photos/100?random=306', top: 33, left: 62, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 7', immagine: 'https://picsum.photos/100?random=307', top: 30, left: 85, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 8', immagine: 'https://picsum.photos/100?random=308', top: 48, left: 28, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 9', immagine: 'https://picsum.photos/100?random=309', top: 50, left: 52, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' },
  { nome: 'Oggetto 10', immagine: 'https://picsum.photos/100?random=310', top: 47, left: 74, spiegazione: '[SPIEGAZIONE DA PERSONALIZZARE]' }
]

function mostraCose() {
  const oggettiHTML = oggettiCestino.map(function (oggetto) {
    return `
      <div class="oggetto-cestino" style="top:${oggetto.top}%; left:${oggetto.left}%">
        <img src="${oggetto.immagine}" class="immagine-oggetto" alt="${oggetto.nome}" />
        <span class="tooltip-oggetto">${oggetto.spiegazione}</span>
      </div>
    `
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="pagina-cose">
      <h1>Cose</h1>
      <div class="cestino-container">
        <img src="${immagineCestino}" class="immagine-cestino" alt="Cestino da picnic" />
        ${oggettiHTML}
      </div>
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

// =============================================================================
// PAGINA "REGALO": una pagina con l'immagine del regalo, raggiungibile dalla
// navbar solo dopo aver inserito il codice giusto.
//
// *** DA PERSONALIZZARE ***: titolo, immagine (sostituisci l'URL con la foto
// del regalo) e testo qui sotto. Il testo è facoltativo: se lo lasci vuoto ('')
// non compare.
// =============================================================================

const titoloRegalo = '[TITOLO DA PERSONALIZZARE]'
const immagineRegalo = 'https://picsum.photos/700?random=500' // sostituisci con l'immagine del regalo
const testoRegalo = '[TESTO DA PERSONALIZZARE]'

function mostraRegalo() {
  document.querySelector('#app').innerHTML = `
    <div class="pagina-regalo">
      <h1>${titoloRegalo}</h1>
      <div class="cornice-regalo">
        <img src="${immagineRegalo}" class="immagine-regalo" alt="Il regalo" />
      </div>
      ${testoRegalo ? `<p class="testo-regalo">${testoRegalo}</p>` : ''}
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

// =============================================================================
// "QUANTO MI CONOSCI": quiz extra, puramente per divertimento — NON fa parte
// del codice segreto (non è uno dei 6 enigmi), è un giochino a sé. Stessa
// meccanica a scelta multipla del quiz dell'Enigma 3, ma qui risponde a
// TUTTE le domande di fila (una risposta sbagliata non fa ricominciare da
// capo) e alla fine vede solo il punteggio finale.
//
// *** DA PERSONALIZZARE ***: le domande/opzioni/risposta corretta in
// "domandeQuantoMiConosci".
// =============================================================================

const domandeQuantoMiConosci = [
  { domanda: '[DOMANDA 1 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione A' },
  { domanda: '[DOMANDA 2 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione B' },
  { domanda: '[DOMANDA 3 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione C' },
  { domanda: '[DOMANDA 4 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione A' },
  { domanda: '[DOMANDA 5 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione D' },
  { domanda: '[DOMANDA 6 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione B' },
  { domanda: '[DOMANDA 7 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione C' },
  { domanda: '[DOMANDA 8 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione A' },
  { domanda: '[DOMANDA 9 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione D' },
  { domanda: '[DOMANDA 10 DA PERSONALIZZARE]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C', 'Opzione D'], corretta: 'Opzione B' }
]

let indiceQMC = 0
let punteggioQMC = 0

function disegnaDomandaQMC() {
  const domandaCorrente = domandeQuantoMiConosci[indiceQMC]

  const opzioniHTML = domandaCorrente.opzioni.map(function (opzione) {
    return `<div class="opzione-qmc" data-opzione="${opzione}">${opzione}</div>`
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="qmc-container">
      <p class="progresso-qmc">Domanda ${indiceQMC + 1} di ${domandeQuantoMiConosci.length}</p>
      <h2 class="domanda-qmc">${domandaCorrente.domanda}</h2>
      <div class="opzioni-grid-qmc">${opzioniHTML}</div>
    </div>
  `
}

function mostraRisultatoQMC() {
  document.querySelector('#app').innerHTML = `
    <div class="risultato-qmc">
      <h1>Hai risposto correttamente a ${punteggioQMC} domande su ${domandeQuantoMiConosci.length}!</h1>
      <button class="rigioca-qmc">Rigioca</button>
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

function mostraQuantoMiConosci() {
  indiceQMC = 0
  punteggioQMC = 0
  disegnaDomandaQMC()
}

function gestisciClickOpzioneQMC(elementoOpzione) {
  const domandaCorrente = domandeQuantoMiConosci[indiceQMC]
  const opzioneScelta = elementoOpzione.dataset.opzione

  // Disabilitiamo i click sulle altre opzioni finché non si passa alla prossima domanda
  document.querySelectorAll('.opzione-qmc').forEach(function (el) {
    el.classList.add('disabilitata')
  })

  if (opzioneScelta === domandaCorrente.corretta) {
    elementoOpzione.classList.add('corretta')
    punteggioQMC = punteggioQMC + 1
  } else {
    elementoOpzione.classList.add('sbagliata')
  }

  setTimeout(function () {
    indiceQMC = indiceQMC + 1

    if (indiceQMC >= domandeQuantoMiConosci.length) {
      mostraRisultatoQMC()
    } else {
      disegnaDomandaQMC()
    }
  }, 700)
}

function mostraContatti() {
  const contattiHTML = contatti.map(function (contatto) {
    return `
      <div class="riga-contatto">
        <span class="etichetta-contatto">${contatto.etichetta}</span>
        <span class="valore-contatto">${contatto.valore}</span>
      </div>
    `
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="pagina-contatti">
      <h1>Contatti</h1>
      <div class="lista-contatti">${contattiHTML}</div>
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

function mostraHub() {
  // Una volta inserito il codice giusto, "home" porta alla pagina che compare
  // dopo il codice (la lettera finale), non più agli enigmi.
  if (codiceSbloccato) {
    mostraPaginaFinale()
    return
  }

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

    <section class="codice-finale-container">
      <h2>Conosci il codice segreto?</h2>
      <p>Risolvi tutti gli enigmi per scoprire le 6 cifre, poi inseriscile qui.</p>
      <input type="text" id="inputCodiceFinale" maxlength="6" class="input-codice-finale" placeholder="______" />
      <button class="controlla-codice-finale">Verifica</button>
      <p id="erroreCodiceFinale" class="errore-codice-finale"></p>
    </section>
  `
}

// =============================================================================
// CODICE SEGRETO: ogni enigma, una volta risolto, rivela UNA cifra (l'enigma
// N rivela la cifra in posizione N). Quando lei ha tutte e 6 le cifre, le
// inserisce nel campo nella home per sbloccare il messaggio finale.
//
// *** DA PERSONALIZZARE ***: sostituisci ogni 'X' con la cifra vera che vuoi
// rivelare per quell'enigma (la seconda è già confermata: 8).
// =============================================================================

const cifreCodice = [
  'X', // cifra rivelata dall'Enigma 1
  '8', // cifra rivelata dall'Enigma 2 (confermata)
  'X', // cifra rivelata dall'Enigma 3
  'X', // cifra rivelata dall'Enigma 4
  'X', // cifra rivelata dall'Enigma 5
  'X'  // cifra rivelata dall'Enigma 6
]

// Resta true per tutta la sessione una volta inserito il codice giusto,
// così dalla home si può tornare a rivedere la pagina finale.
let codiceSbloccato = false

// Le voci "Viaggi" (page6) e "Cose" (page7) della navbar restano nascoste
// finché non viene inserito il codice giusto. Si agisce sulle voci già
// presenti in index.html, quindi l'HTML non va modificato.
const vociNavbarRiservate = ['page6', 'page7']

function aggiornaVisibilitaVociRiservate() {
  vociNavbarRiservate.forEach(function (href) {
    const link = document.querySelector(`.hub-nav a[href="${href}"]`)
    if (!link) return
    const voce = link.closest('li') || link
    voce.style.display = codiceSbloccato ? '' : 'none'
  })
}

function controllaCodiceFinale() {
  const input = document.querySelector('#inputCodiceFinale')
  const valoreInserito = input.value.trim()
  const codiceCorretto = cifreCodice.join('')

  if (valoreInserito === codiceCorretto) {
    codiceSbloccato = true
    aggiornaVisibilitaVociRiservate()
    sbloccaLettoreCanzone()
    mostraPaginaFinale()
  } else {
    document.querySelector('#erroreCodiceFinale').textContent = 'Codice errato, riprova!'
  }
}

// =============================================================================
// PAGINA FINALE: non è un overlay come le schermate di vittoria degli enigmi,
// ma una pagina vera e propria che sostituisce tutto il contenuto di #app —
// il "traguardo" di tutto il percorso.
//
// *** DA PERSONALIZZARE ***: titoloFinale, fotoFinale (una o più immagini),
// testoFinale (la lettera/dichiarazione d'amore).
// =============================================================================

const titoloFinale = '[TITOLO DA PERSONALIZZARE]'
const fotoFinale = 'https://picsum.photos/600?random=99' // sostituisci con una vostra foto
const testoFinale = `
  [TESTO DA PERSONALIZZARE — qui scrivi tutto quello che vuoi dirle: la vostra
  storia, cosa significa lei per te, una dichiarazione, un ricordo speciale.
  Puoi scrivere più paragrafi, basta separarli andando a capo qui dentro.]
`

function mostraPaginaFinale() {
  document.querySelector('#app').innerHTML = `
    <div class="pagina-finale">
      <h1 class="titolo-finale">${titoloFinale}</h1>
      <div class="foto-finale-container">
        <img src="${fotoFinale}" class="foto-finale" alt="Noi due" />
      </div>
      <p class="testo-finale">${testoFinale}</p>
    </div>
  `
}

// =============================================================================
// CANZONE DI SOTTOFONDO: tag <audio controls> vero, con un file mp3 reale.
// Vive dentro index.html, FUORI da #app — esattamente come la navbar — così
// non viene mai distrutto quando cambiamo pagina e continua a suonare mentre
// si naviga nel sito. I controlli nativi (play/pausa/avanzamento/volume)
// restano sempre utilizzabili.
//
// Il player resta nascosto (display:none) finché il codice finale non viene
// inserito correttamente. A quel punto sbloccaLettoreCanzone() gli assegna
// il file audio, lo rende visibile e sostituisce i link della navbar (ancora
// inutilizzati) con un'unica voce "Canzone", che apre/chiude il player.
//
// *** DA PERSONALIZZARE ***: urlCanzone. Metti il file mp3 dentro la cartella
// public/ del progetto (es. public/canzone.mp3) e scrivi qui il percorso
// con lo slash iniziale: '/canzone.mp3'. Serve anche aggiungere il tag
// <audio> in index.html — vedi le istruzioni a parte.
// =============================================================================

const urlCanzone = '[PERCORSO DEL FILE MP3 DA PERSONALIZZARE — es. /canzone.mp3]'

function sbloccaLettoreCanzone() {
  // Una volta inserito il codice giusto, la navbar si "semplifica": restano
  // visibili SOLO Viaggi, Cose, Regalo e Canzone (Home/Spiegazione/Chi siamo/Contatti
  // scompaiono dal menu — restano comunque raggiungibili dai bottoni "Torna
  // alla home" dentro le pagine).
  const listaLink = document.querySelector('#listaLink')
  if (listaLink) {
    listaLink.innerHTML = `
      <li><a href="page6">Viaggi</a></li>
      <li><a href="page7">Cose</a></li>
      <li><a href="page9">Regalo</a></li>
      <li><a href="page5">Canzone</a></li>
    `
  }

  const audio = document.querySelector('#audioCanzone')
  if (audio) {
    audio.src = urlCanzone
    audio.loop = true
    audio.play()
  }

  const player = document.querySelector('#player-canzone')
  if (player) {
    player.style.display = 'flex'
  }
}

function toggleVisibilitaLettoreCanzone() {
  const player = document.querySelector('#player-canzone')
  if (!player) return
  player.style.display = (player.style.display === 'none') ? 'flex' : 'none'
}

// =============================================================================
// PAGINA "I NOSTRI VIAGGI": una linea del tempo con un
// puntino per ogni viaggio. Al passaggio del mouse (gestito in puro CSS,
// nessun JS necessario per il tooltip) appare il nome del viaggio. Al click
// si apre una schermata a pieno sfondo con le 4 foto di quel viaggio, un
// gradiente sopra (colore in base al viaggio) per rendere leggibile il testo,
// e una cornice colorata in tema.
//
// *** DA PERSONALIZZARE ***: modifica/aggiungi viaggi nell'array "viaggi"
// (vedi il commento sopra l'array).
// =============================================================================

const annoInizioTimeline = 2019
const annoFineTimeline = new Date().getFullYear()

// *** DA PERSONALIZZARE ***: per ogni viaggio, le 4 foto (ora sono foto
// casuali da sostituire con le vostre) e, se vuoi, l'anno (scrivi "anno: 2022").
// I viaggi sono nell'ordine in cui compaiono sulla linea. Finché non metti gli
// anni, i puntini sono distribuiti in modo uniforme; se li metti TUTTI, la
// posizione si calcola dall'anno, e sulla linea compaiono anche gli anni.
// "colore" è il colore del tema della pagina di quel viaggio.
const viaggi = [
  {
    anno: null,
    nome: 'Venezia',
    colore: '#2f6b7a',
    foto: [
      'https://picsum.photos/400?random=200',
      'https://picsum.photos/400?random=201',
      'https://picsum.photos/400?random=202',
      'https://picsum.photos/400?random=203'
    ]
  },
  {
    anno: null,
    nome: 'Verona',
    colore: '#a24a36',
    foto: [
      'https://picsum.photos/400?random=204',
      'https://picsum.photos/400?random=205',
      'https://picsum.photos/400?random=206',
      'https://picsum.photos/400?random=207'
    ]
  },
  {
    anno: null,
    nome: 'Toscana',
    colore: '#6b7a3a',
    foto: [
      'https://picsum.photos/400?random=208',
      'https://picsum.photos/400?random=209',
      'https://picsum.photos/400?random=210',
      'https://picsum.photos/400?random=211'
    ]
  },
  {
    anno: null,
    nome: 'New York',
    colore: '#2e3a4d',
    foto: [
      'https://picsum.photos/400?random=212',
      'https://picsum.photos/400?random=213',
      'https://picsum.photos/400?random=214',
      'https://picsum.photos/400?random=215'
    ]
  },
  {
    anno: null,
    nome: 'Cervo',
    colore: '#2a5d8a',
    foto: [
      'https://picsum.photos/400?random=216',
      'https://picsum.photos/400?random=217',
      'https://picsum.photos/400?random=218',
      'https://picsum.photos/400?random=219'
    ]
  },
  {
    anno: null,
    nome: 'Budapest',
    colore: '#7a2a3a',
    foto: [
      'https://picsum.photos/400?random=220',
      'https://picsum.photos/400?random=221',
      'https://picsum.photos/400?random=222',
      'https://picsum.photos/400?random=223'
    ]
  },
  {
    anno: null,
    nome: 'Lisbona',
    colore: '#b0832a',
    foto: [
      'https://picsum.photos/400?random=224',
      'https://picsum.photos/400?random=225',
      'https://picsum.photos/400?random=226',
      'https://picsum.photos/400?random=227'
    ]
  },
  {
    anno: null,
    nome: 'Cracovia',
    colore: '#4d3a5c',
    foto: [
      'https://picsum.photos/400?random=232',
      'https://picsum.photos/400?random=233',
      'https://picsum.photos/400?random=234',
      'https://picsum.photos/400?random=235'
    ]
  },
  {
    anno: null,
    nome: 'Valencia',
    colore: '#c0602a',
    foto: [
      'https://picsum.photos/400?random=228',
      'https://picsum.photos/400?random=229',
      'https://picsum.photos/400?random=230',
      'https://picsum.photos/400?random=231'
    ]
  }
]

// Se tutti i viaggi hanno l'anno, la linea è una vera scala temporale; altrimenti
// i puntini sono distribuiti in modo uniforme, nell'ordine dell'array.
function tuttiViaggiHannoAnno() {
  return viaggi.every(function (viaggio) { return viaggio.anno })
}

function calcolaPosizionePercento(viaggio, indice) {
  if (tuttiViaggiHannoAnno()) {
    return ((viaggio.anno - annoInizioTimeline) / (annoFineTimeline - annoInizioTimeline)) * 100
  }
  if (viaggi.length === 1) return 50
  return 4 + (indice / (viaggi.length - 1)) * 92 // tra il 4% e il 96%
}

function mostraViaggi() {
  const conAnni = tuttiViaggiHannoAnno()

  const puntiHTML = viaggi.map(function (viaggio, indice) {
    const posizione = calcolaPosizionePercento(viaggio, indice)
    return `
      <div class="punto-viaggio" style="left:${posizione}%" data-indice="${indice}">
        <span class="tooltip-viaggio">${viaggio.nome}</span>
      </div>
    `
  }).join('')

  const etichetteHTML = conAnni ? `
        <span class="etichetta-anno etichetta-anno-inizio">${annoInizioTimeline}</span>
        <span class="etichetta-anno etichetta-anno-fine">${annoFineTimeline}</span>` : ''

  document.querySelector('#app').innerHTML = `
    <div class="pagina-viaggi">
      <h1>I nostri viaggi</h1>
      <div class="timeline-viaggi-container">
        <div class="linea-timeline"></div>
        ${puntiHTML}${etichetteHTML}
      </div>
      <button class="vai-home">Torna alla home</button>
    </div>
  `
}

function mostraDettaglioViaggio(indice) {
  const viaggio = viaggi[indice]

  const fotoHTML = viaggio.foto.map(function (url) {
    return `<div class="foto-viaggio-sfondo" style="background-image:url('${url}')"></div>`
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="dettaglio-viaggio" style="border-color:${viaggio.colore}">
      <div class="collage-viaggio">${fotoHTML}</div>
      <div class="overlay-gradiente-viaggio" style="background:linear-gradient(to bottom, transparent, ${viaggio.colore})"></div>
      <div class="contenuto-dettaglio-viaggio">
        <h1>${viaggio.nome}</h1>
        ${viaggio.anno ? `<p>${viaggio.anno}</p>` : ''}
        <button class="vai-viaggi">Torna alla timeline</button>
      </div>
    </div>
  `
}

// =============================================================================
// Funzione helper riusata da tutti gli enigmi: mescola un array "sul posto"
// (algoritmo di Fisher-Yates). Usata per carte, eventi, lettere, ecc.
// =============================================================================

function mescola(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

// =============================================================================
// ENIGMA 1 (puzzle fotografico): una vostra foto divisa in 16 pezzi (griglia
// 4x4), mescolati in un "vassoio"; si trascinano — con mouse O con un dito su
// smartphone — nella griglia vuota, nel posto giusto.
//
// Il trascinamento è gestito "a mano" con i Pointer Event (pointerdown /
// pointermove / pointerup) invece del drag-and-drop nativo del browser,
// perché quello nativo (l'attributo draggable) funziona male o per niente
// sui touchscreen — i Pointer Event invece si comportano allo stesso modo
// con mouse, dito e penna, quindi funziona ovunque.
//
// Ogni pezzo NON è un ritaglio separato dell'immagine: è un div con la
// stessa immagine intera come sfondo, spostata con background-position —
// lo stesso trucco già accennato nel commento dell'Enigma 5.
//
// "latoPezzoPuzzle1" è la dimensione, in pixel, di OGNI pezzo: la stessa nel
// vassoio e nella griglia, così un pezzo non cambia mai grandezza spostandosi.
// Viene calcolata a ogni disegno: al massimo 124px, ma più piccola se lo
// schermo non basta: su schermi larghi griglia e vassoio (4 colonne) stanno
// affiancati e devono entrare anche in altezza, senza scrollare; su schermi
// stretti (smartphone) il vassoio va sotto la griglia.
//
// *** DA PERSONALIZZARE ***: immaginePuzzle1 con una vostra foto vera.
// =============================================================================

const immaginePuzzle1 = 'https://picsum.photos/450?random=400'
const dimensionePuzzle1 = 4 // griglia 4x4 = 16 pezzi
const latoMassimoPezzoPuzzle1 = 124
let latoPezzoPuzzle1 = latoMassimoPezzoPuzzle1

let enigma1GiaCreato = false
let enigma1Completato = false
let slotPuzzle1 = [] // 16 posizioni: null (vuota) oppure l'id del pezzo che occupa quella casella
let vassoioPuzzle1 = [] // id dei pezzi ancora nel vassoio, mescolati

function creaPuzzle1() {
  const totalePezzi = dimensionePuzzle1 * dimensionePuzzle1
  slotPuzzle1 = new Array(totalePezzi).fill(null)
  vassoioPuzzle1 = mescola(
    Array.from({ length: totalePezzi }, function (_, i) { return i })
  )
}

function calcolaLatoPezzoPuzzle1() {
  const larghezza = window.innerWidth
  const altezza = window.innerHeight
  let lato = latoMassimoPezzoPuzzle1

  if (larghezza >= 900) {
    // griglia (4 pezzi) + spazio + vassoio (4 pezzi + padding) in orizzontale
    lato = Math.min(lato, Math.floor((larghezza - 170) / 8))
    // vassoio alto 4 righe: deve entrare nello schermo, meno intestazioni
    lato = Math.min(lato, Math.floor((altezza - 270) / 4))
  } else {
    lato = Math.min(lato, Math.floor((larghezza - 40) / dimensionePuzzle1))
  }

  return Math.max(50, lato)
}

// Stile del pezzo "idPezzo": l'immagine intera, ingrandita e spostata in
// modo che si veda solo il riquadro corrispondente a quel pezzo.
function stilePezzoPuzzle1(idPezzo) {
  const riga = Math.floor(idPezzo / dimensionePuzzle1)
  const colonna = idPezzo % dimensionePuzzle1
  const passo = 100 / (dimensionePuzzle1 - 1)

  return `width:${latoPezzoPuzzle1}px; height:${latoPezzoPuzzle1}px; background-image:url('${immaginePuzzle1}'); background-size:${dimensionePuzzle1 * 100}% ${dimensionePuzzle1 * 100}%; background-position:${colonna * passo}% ${riga * passo}%;`
}

function disegnaPuzzle1() {
  latoPezzoPuzzle1 = calcolaLatoPezzoPuzzle1()
  const stileSlot = `width:${latoPezzoPuzzle1}px; height:${latoPezzoPuzzle1}px;`

  const slotHTML = slotPuzzle1.map(function (idPezzo, indice) {
    if (idPezzo === null) {
      return `<div class="slot-puzzle1" data-indice="${indice}" style="${stileSlot}"></div>`
    }
    return `<div class="slot-puzzle1" data-indice="${indice}" style="${stileSlot}"><div class="pezzo-puzzle1" data-pezzo="${idPezzo}" data-da="slot" data-da-indice="${indice}" style="${stilePezzoPuzzle1(idPezzo)}"></div></div>`
  }).join('')

  const vassoioHTML = vassoioPuzzle1.map(function (idPezzo) {
    return `<div class="pezzo-puzzle1" data-pezzo="${idPezzo}" data-da="vassoio" style="${stilePezzoPuzzle1(idPezzo)}"></div>`
  }).join('')

  const latoGriglia = dimensionePuzzle1 * latoPezzoPuzzle1
  const larghezzaVassoio = 4 * latoPezzoPuzzle1 + 3 * 14 + 2 * 14 // 4 pezzi per riga

  document.querySelector('#app').innerHTML = `
    <div class="puzzle1-container">
      <p class="istruzioni-puzzle1">Trascina i pezzi nella griglia per ricomporre la foto</p>
      <div class="puzzle1-area">
        <div class="griglia-puzzle1" style="grid-template-columns:repeat(${dimensionePuzzle1}, ${latoPezzoPuzzle1}px); grid-template-rows:repeat(${dimensionePuzzle1}, ${latoPezzoPuzzle1}px); width:${latoGriglia}px; height:${latoGriglia}px;">${slotHTML}</div>
        <div class="vassoio-puzzle1" style="width:${larghezzaVassoio}px; max-width:100%;">${vassoioHTML}</div>
      </div>
    </div>
  `
}

function mostraMessaggioVittoriaEnigma1() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La prima cifra del codice è ${cifreCodice[0]}
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma1() {
  if (!enigma1GiaCreato) {
    creaPuzzle1()
    enigma1GiaCreato = true
  }
  disegnaPuzzle1()

  if (enigma1Completato) {
    mostraMessaggioVittoriaEnigma1()
  }
}

function controllaVittoriaPuzzle1() {
  const risolto = slotPuzzle1.every(function (idPezzo, indice) {
    return idPezzo === indice
  })

  if (risolto) {
    enigma1Completato = true
    setTimeout(function () {
      mostraMessaggioVittoriaEnigma1()
    }, 300)
  }
}

// --- Trascinamento dei pezzi, con i Pointer Event (mouse, dito o penna) ---
// Questi listener vivono fuori da ogni funzione, quindi vengono registrati
// UNA SOLA volta all'avvio: controllano da soli, guardando il DOM, se siamo
// davvero sulla pagina dell'Enigma 1 prima di fare qualcosa.

let pezzoTrascinatoPuzzle1 = null // { idPezzo, provenienza, provenienzaIndice, clone, larghezza, altezza }

document.addEventListener('pointerdown', function (event) {
  const elementoPezzo = event.target.closest('.pezzo-puzzle1')
  if (!elementoPezzo) return

  const larghezza = elementoPezzo.offsetWidth
  const altezza = elementoPezzo.offsetHeight

  // Creiamo un "clone" visivo del pezzo che seguirà il dito/il mouse durante
  // il trascinamento, lasciando il pezzo originale al suo posto (verrà
  // comunque ridisegnato subito dopo, quando il trascinamento finisce).
  const clone = elementoPezzo.cloneNode(true)
  clone.classList.add('pezzo-puzzle1-trascinato')
  clone.style.width = larghezza + 'px'
  clone.style.height = altezza + 'px'
  clone.style.left = (event.clientX - larghezza / 2) + 'px'
  clone.style.top = (event.clientY - altezza / 2) + 'px'
  document.body.appendChild(clone)

  elementoPezzo.style.opacity = '0.25'

  pezzoTrascinatoPuzzle1 = {
    idPezzo: Number(elementoPezzo.dataset.pezzo),
    provenienza: elementoPezzo.dataset.da, // 'vassoio' oppure 'slot'
    provenienzaIndice: elementoPezzo.dataset.daIndice ? Number(elementoPezzo.dataset.daIndice) : null,
    clone: clone,
    larghezza: larghezza,
    altezza: altezza
  }
})

document.addEventListener('pointermove', function (event) {
  if (!pezzoTrascinatoPuzzle1) return
  const trascinamento = pezzoTrascinatoPuzzle1
  trascinamento.clone.style.left = (event.clientX - trascinamento.larghezza / 2) + 'px'
  trascinamento.clone.style.top = (event.clientY - trascinamento.altezza / 2) + 'px'
})

document.addEventListener('pointerup', function (event) {
  if (!pezzoTrascinatoPuzzle1) return

  const trascinamento = pezzoTrascinatoPuzzle1
  trascinamento.clone.remove()
  pezzoTrascinatoPuzzle1 = null

  // Se nel frattempo si è usciti dalla pagina del puzzle, non facciamo nulla.
  if (!document.querySelector('.puzzle1-container')) return

  // Lo slot di destinazione lo ricaviamo dalla posizione rispetto alla
  // griglia (e non da elementFromPoint): le linguette dei pezzi vicini
  // sporgono sopra gli slot confinanti e darebbero lo slot sbagliato.
  const griglia = document.querySelector('.griglia-puzzle1')
  const rettangolo = griglia.getBoundingClientRect()
  const x = event.clientX - rettangolo.left
  const y = event.clientY - rettangolo.top
  const dentroGriglia = x >= 0 && y >= 0 && x < rettangolo.width && y < rettangolo.height

  const elementoSotto = document.elementFromPoint(event.clientX, event.clientY)
  const vassoioDestinazione = elementoSotto ? elementoSotto.closest('.vassoio-puzzle1') : null

  if (dentroGriglia) {
    const colonna = Math.floor(x / latoPezzoPuzzle1)
    const riga = Math.floor(y / latoPezzoPuzzle1)
    spostaPezzoPuzzle1(trascinamento, { tipo: 'slot', indice: riga * dimensionePuzzle1 + colonna })
  } else if (vassoioDestinazione) {
    spostaPezzoPuzzle1(trascinamento, { tipo: 'vassoio' })
  } else {
    // Rilasciato fuori dall'area utile: ridisegniamo comunque, così il
    // pezzo originale (che avevamo reso semi-trasparente) torna visibile.
    disegnaPuzzle1()
  }
})

function spostaPezzoPuzzle1(trascinamento, destinazione) {
  // Togliamo il pezzo da dove si trovava prima del trascinamento.
  if (trascinamento.provenienza === 'vassoio') {
    vassoioPuzzle1 = vassoioPuzzle1.filter(function (id) {
      return id !== trascinamento.idPezzo
    })
  } else {
    slotPuzzle1[trascinamento.provenienzaIndice] = null
  }

  if (destinazione.tipo === 'slot') {
    // Se nello slot di destinazione c'era già un altro pezzo, torna nel vassoio.
    const pezzoEsistente = slotPuzzle1[destinazione.indice]
    if (pezzoEsistente !== null) {
      vassoioPuzzle1.push(pezzoEsistente)
    }
    slotPuzzle1[destinazione.indice] = trascinamento.idPezzo
  } else {
    vassoioPuzzle1.push(trascinamento.idPezzo)
  }

  disegnaPuzzle1()
  controllaVittoriaPuzzle1()
}

// =============================================================================
// ENIGMA 2 (memory): stato definito FUORI dalla funzione, così sopravvive
// ogni volta che si entra e si esce dall'enigma, invece di essere ricreato.
//
// *** DA PERSONALIZZARE ***: i "valore" delle carte (sostituire 'foto1' ecc.
// con gli URL delle foto vere), e il testo del messaggio finale.
// =============================================================================

let mazzo = []
let carteGirate = []
let bloccatoMemory = false
let mazzoGiaCreato = false
let memoryCompletato = false

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

function mostraMessaggioVittoriaEnigma2() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La seconda cifra del codice è ${cifreCodice[1]}
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

  if (memoryCompletato) {
    mostraMessaggioVittoriaEnigma2()
  }
}

function gestisciClickCarta(elementoCarta) {
  if (bloccatoMemory) return

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
          mostraMessaggioVittoriaEnigma2()
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

// =============================================================================
// ENIGMA 3 (chi è questo giocatore?): quiz a scelta multipla con progressione
// lineare. Stato persistente, come il memory.
//
// *** DA PERSONALIZZARE ***: le immagini, i nomi delle opzioni, quale sia
// quella corretta per ciascuna domanda, e il testo del messaggio finale.
// =============================================================================

const domandeEnigma3 = [
  { immagine: 'https://picsum.photos/300?random=1', opzioni: ['Nome1', 'Nome2', 'Nome3', 'Nome4'], corretta: 'Nome1' },
  { immagine: 'https://picsum.photos/300?random=2', opzioni: ['Nome5', 'Nome6', 'Nome7', 'Nome8'], corretta: 'Nome6' },
  { immagine: 'https://picsum.photos/300?random=3', opzioni: ['Nome9', 'Nome10', 'Nome11', 'Nome12'], corretta: 'Nome9' },
  { immagine: 'https://picsum.photos/300?random=4', opzioni: ['Nome13', 'Nome14', 'Nome15', 'Nome16'], corretta: 'Nome14' },
  { immagine: 'https://picsum.photos/300?random=5', opzioni: ['Nome17', 'Nome18', 'Nome19', 'Nome20'], corretta: 'Nome17' },
  { immagine: 'https://picsum.photos/300?random=6', opzioni: ['Nome21', 'Nome22', 'Nome23', 'Nome24'], corretta: 'Nome23' },
  { immagine: 'https://picsum.photos/300?random=7', opzioni: ['Nome25', 'Nome26', 'Nome27', 'Nome28'], corretta: 'Nome25' },
  { immagine: 'https://picsum.photos/300?random=8', opzioni: ['Nome29', 'Nome30', 'Nome31', 'Nome32'], corretta: 'Nome30' },
  { immagine: 'https://picsum.photos/300?random=9', opzioni: ['Nome33', 'Nome34', 'Nome35', 'Nome36'], corretta: 'Nome33' },
  { immagine: 'https://picsum.photos/300?random=10', opzioni: ['Nome37', 'Nome38', 'Nome39', 'Nome40'], corretta: 'Nome38' }
]

let indiceAttuale3 = 0
let enigma3Completato = false

function disegnaDomanda3() {
  const domandaCorrente = domandeEnigma3[indiceAttuale3]

  const opzioniHTML = domandaCorrente.opzioni.map(function (nome) {
    return `<div class="opzione-quiz" data-nome="${nome}">${nome}</div>`
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="quiz-container">
      <img src="${domandaCorrente.immagine}" class="foto-giocatore" />
      <div class="opzioni-grid">${opzioniHTML}</div>
    </div>
  `
}

function mostraMessaggioVittoriaEnigma3() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La terza cifra del codice è ${cifreCodice[2]}
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma3() {
  disegnaDomanda3()

  if (enigma3Completato) {
    mostraMessaggioVittoriaEnigma3()
  }
}

function gestisciClickOpzione(elementoOpzione) {
  const domandaCorrente = domandeEnigma3[indiceAttuale3]
  const nomeScelto = elementoOpzione.dataset.nome

  if (nomeScelto === domandaCorrente.corretta) {
    elementoOpzione.classList.add('corretta')

    setTimeout(function () {
      indiceAttuale3 = indiceAttuale3 + 1

      if (indiceAttuale3 >= domandeEnigma3.length) {
        enigma3Completato = true
        mostraMessaggioVittoriaEnigma3()
      } else {
        disegnaDomanda3()
      }
    }, 600)
  } else {
    indiceAttuale3 = 0
    disegnaDomanda3()
  }
}

// =============================================================================
// ENIGMA 4 (timeline): 9 eventi mostrati in ordine casuale, da cliccare nel
// giusto ordine cronologico. Un click sbagliato riporta tutto all'inizio.
//
// *** DA PERSONALIZZARE ***: il "testo" di ciascun evento (l'ORDINE in cui
// li scrivi qui sotto è l'ordine cronologico corretto: il primo elemento
// dell'array è il primo evento accaduto), e il testo del messaggio finale.
// =============================================================================

const eventiTimeline = [
  { id: 0, testo: '[Evento 1 — il più vecchio]' },
  { id: 1, testo: '[Evento 2]' },
  { id: 2, testo: '[Evento 3]' },
  { id: 3, testo: '[Evento 4]' },
  { id: 4, testo: '[Evento 5]' },
  { id: 5, testo: '[Evento 6]' },
  { id: 6, testo: '[Evento 7]' },
  { id: 7, testo: '[Evento 8]' },
  { id: 8, testo: '[Evento 9 — il più recente]' }
]

let timelineMostrata = []
let timelineGiaCreata = false
let prossimoIndiceTimeline = 0
let timelineCompletata = false

function creaTimeline() {
  const copiaConStato = eventiTimeline.map(function (evento) {
    return { id: evento.id, testo: evento.testo, trovato: false }
  })
  timelineMostrata = mescola(copiaConStato)
}

function disegnaTimeline() {
  const html = timelineMostrata.map(function (evento) {
    const classeTrovato = evento.trovato ? 'trovato' : ''
    return `<div class="evento-timeline ${classeTrovato}" data-id="${evento.id}">${evento.testo}</div>`
  }).join('')

  document.querySelector('#app').innerHTML = `<div class="timeline-container">${html}</div>`
}

function mostraMessaggioVittoriaEnigma4() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La quarta cifra del codice è ${cifreCodice[3]}
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma4() {
  if (!timelineGiaCreata) {
    creaTimeline()
    timelineGiaCreata = true
  }
  disegnaTimeline()

  if (timelineCompletata) {
    mostraMessaggioVittoriaEnigma4()
  }
}

function gestisciClickEvento(elementoEvento) {
  const id = Number(elementoEvento.dataset.id)
  const evento = timelineMostrata.find(function (e) {
    return e.id === id
  })

  if (evento.trovato) return // già trovato in questo giro, ignora

  if (id === prossimoIndiceTimeline) {
    evento.trovato = true
    prossimoIndiceTimeline = prossimoIndiceTimeline + 1
    disegnaTimeline()

    if (prossimoIndiceTimeline === eventiTimeline.length) {
      timelineCompletata = true
      setTimeout(function () {
        mostraMessaggioVittoriaEnigma4()
      }, 400)
    }
  } else {
    // ordine sbagliato: si riparte da capo
    prossimoIndiceTimeline = 0
    timelineMostrata.forEach(function (e) {
      e.trovato = false
    })
    disegnaTimeline()
  }
}

// =============================================================================
// ENIGMA 5 (completa la frase): ogni frase ha una parola mancante; si sceglie
// la parola giusta tra più opzioni. Quando tutte le frasi sono completate,
// l'enigma è risolto. Un'opzione sbagliata si "spegne" e resta spenta.
//
// *** DA PERSONALIZZARE ***: tutto in "frasiEnigma5" è un segnaposto.
//   - "prima" e "dopo": il testo prima e dopo la parola mancante
//   - "opzioni": le parole tra cui scegliere (anche più o meno di 3)
//   - "corretta": la POSIZIONE (0 = la prima, 1 = la seconda...) di quella giusta
// Puoi aggiungere o togliere frasi: il resto si adatta da solo.
// =============================================================================

const frasiEnigma5 = [
  { prima: '[Frase 1: testo prima]', dopo: '[testo dopo]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C'], corretta: 0 },
  { prima: '[Frase 2: testo prima]', dopo: '[testo dopo]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C'], corretta: 1 },
  { prima: '[Frase 3: testo prima]', dopo: '[testo dopo]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C'], corretta: 2 },
  { prima: '[Frase 4: testo prima]', dopo: '[testo dopo]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C'], corretta: 0 },
  { prima: '[Frase 5: testo prima]', dopo: '[testo dopo]', opzioni: ['Opzione A', 'Opzione B', 'Opzione C'], corretta: 1 }
]

let enigma5Completato = false
let frasiRisolteEnigma5 = [] // per ogni frase: true se già completata
let erroriEnigma5 = [] // per ogni frase: elenco delle opzioni sbagliate già provate

function creaEnigma5() {
  frasiRisolteEnigma5 = frasiEnigma5.map(function () { return false })
  erroriEnigma5 = frasiEnigma5.map(function () { return [] })
}

function disegnaEnigma5() {
  const frasiHTML = frasiEnigma5.map(function (frase, indiceFrase) {
    const risolta = frasiRisolteEnigma5[indiceFrase]
    const parola = risolta
      ? `<span class="parola-frase trovata">${frase.opzioni[frase.corretta]}</span>`
      : '<span class="parola-frase vuota">&nbsp;</span>'

    const opzioniHTML = risolta ? '' : `
      <div class="opzioni-frase">
        ${frase.opzioni.map(function (testo, indiceOpzione) {
          const sbagliata = erroriEnigma5[indiceFrase].includes(indiceOpzione)
          return `<button class="opzione-frase${sbagliata ? ' sbagliata' : ''}" data-frase="${indiceFrase}" data-opzione="${indiceOpzione}"${sbagliata ? ' disabled' : ''}>${testo}</button>`
        }).join('')}
      </div>
    `

    return `
      <div class="frase-completa${risolta ? ' risolta' : ''}">
        <p class="testo-frase">${frase.prima} ${parola} ${frase.dopo}</p>
        ${opzioniHTML}
      </div>
    `
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="frasi-container">
      <p class="istruzioni-frasi">Completa ogni frase con la parola giusta</p>
      ${frasiHTML}
    </div>
  `
}

function mostraMessaggioVittoriaEnigma5() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La quinta cifra del codice è ${cifreCodice[4]}
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma5() {
  if (frasiRisolteEnigma5.length !== frasiEnigma5.length) {
    creaEnigma5()
  }
  disegnaEnigma5()

  if (enigma5Completato) {
    mostraMessaggioVittoriaEnigma5()
  }
}

function gestisciClickOpzioneFrase(elementoOpzione) {
  const indiceFrase = Number(elementoOpzione.dataset.frase)
  const indiceOpzione = Number(elementoOpzione.dataset.opzione)

  if (indiceOpzione === frasiEnigma5[indiceFrase].corretta) {
    frasiRisolteEnigma5[indiceFrase] = true
  } else {
    erroriEnigma5[indiceFrase].push(indiceOpzione)
  }
  disegnaEnigma5()

  const tutteRisolte = frasiRisolteEnigma5.every(function (risolta) { return risolta })
  if (tutteRisolte && !enigma5Completato) {
    enigma5Completato = true
    setTimeout(function () {
      mostraMessaggioVittoriaEnigma5()
    }, 500)
  }
}

// =============================================================================
// ENIGMA 6 (cassaforte): una vera manopola circolare, da far girare
// trascinandola col mouse o col dito (Pointer Event, come il puzzle
// dell'Enigma 1). Sotto la freccia fissa in alto c'è sempre un numero da 0 a
// 99: si porta il numero giusto sotto la freccia, poi si preme "Conferma".
// La combinazione va inserita nell'ordine giusto: se se ne sbaglia una, la
// serie riparte da capo, come in una cassaforte vera.
//
// Combinazione: 20 / 10 / 20 / 21. Per cambiarla basta modificare
// "combinazioneEnigma6".
// =============================================================================

const combinazioneEnigma6 = [20, 10, 20, 21]

let angoloManopola = 0 // rotazione totale in gradi (può superare 360)
let passoCassaforte = 0 // quanti numeri della combinazione sono già stati inseriti
let messaggioCassaforte = ''
let ultimaDirezioneManopola = 0 // direzione dell'ultimo movimento: 1 = destra (senso orario), -1 = sinistra
let enigma6Completato = false

// Come in una cassaforte vera, i numeri vanno inseriti girando da un lato
// alternato: il primo verso destra (senso orario), il secondo verso sinistra,
// il terzo di nuovo a destra, e così via.
function direzioneRichiesta() {
  return passoCassaforte % 2 === 0 ? 1 : -1
}

function testoDirezione() {
  const numero = passoCassaforte + 1
  const totale = combinazioneEnigma6.length
  return direzioneRichiesta() === 1
    ? `Numero ${numero} di ${totale}: gira verso destra &#8635;`
    : `Numero ${numero} di ${totale}: gira verso sinistra &#8634;`
}

// Il numero sotto la freccia: la manopola ha 100 numeri, uno ogni 3,6 gradi,
// disposti in senso orario; girando la manopola in senso orario i numeri
// scorrono sotto la freccia in ordine decrescente (come nelle casseforti vere).
function numeroSottoFreccia() {
  const posizione = Math.round(-angoloManopola / 3.6)
  return ((posizione % 100) + 100) % 100
}

// Disegna in SVG il disco della manopola: 100 tacche, e un numero ogni 10.
function disegnaDiscoManopola() {
  let elementi = ''
  for (let n = 0; n < 100; n++) {
    const angolo = n * 3.6
    const principale = n % 10 === 0
    const media = n % 5 === 0
    const lunghezza = principale ? 20 : (media ? 14 : 8)
    elementi += `<line x1="150" y1="12" x2="150" y2="${12 + lunghezza}" transform="rotate(${angolo} 150 150)" stroke-width="${principale ? 2.5 : 1.2}" />`
    if (principale) {
      elementi += `<text x="150" y="52" text-anchor="middle" transform="rotate(${angolo} 150 150)">${n}</text>`
    }
  }
  return `
    <svg viewBox="0 0 300 300" class="disco-cassaforte" aria-hidden="true">
      <circle cx="150" cy="150" r="146" class="disco-fondo" />
      <circle cx="150" cy="150" r="88" class="disco-centro" />
      <g class="disco-tacche">${elementi}</g>
    </svg>
  `
}

function disegnaCassaforte() {
  const puntiHTML = combinazioneEnigma6.map(function (_, i) {
    return `<span class="punto-cassaforte${i < passoCassaforte ? ' acceso' : ''}"></span>`
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="cassaforte-container">
      <p class="istruzioni-cassaforte">Trascina la manopola, porta il numero giusto sotto la freccia girando dal lato indicato, poi premi Conferma. Ascolta i click: più sei vicino, più diventano acuti e forti</p>
      <div class="cassaforte${enigma6Completato ? ' aperta' : ''}">
        <div class="punti-cassaforte">${puntiHTML}</div>
        <p class="direzione-cassaforte">${enigma6Completato ? '' : testoDirezione()}</p>
        <div class="freccia-fissa-cassaforte"></div>
        <div class="manopola-cassaforte" style="transform: rotate(${angoloManopola}deg);">${disegnaDiscoManopola()}</div>
        <div class="numero-attuale-cassaforte">${String(numeroSottoFreccia()).padStart(2, '0')}</div>
      </div>
      <p class="messaggio-cassaforte">${enigma6Completato ? 'Click! La cassaforte si è aperta' : messaggioCassaforte}</p>
      ${enigma6Completato ? '' : '<button class="conferma-cassaforte">Conferma</button>'}
    </div>
  `
}

function mostraMessaggioVittoriaEnigma6() {
  document.querySelector('#app').innerHTML += `
    <div class="overlay-vittoria">
      <div class="messaggio-vittoria">
        Completato!! La sesta cifra del codice è ${cifreCodice[5]}
        <br>
        <button class="vai-home">Vai alla home</button>
      </div>
    </div>
  `
}

function mostraEnigma6() {
  messaggioCassaforte = ''
  ultimaDirezioneManopola = 0
  disegnaCassaforte()

  if (enigma6Completato) {
    mostraMessaggioVittoriaEnigma6()
  }
}

function gestisciConfermaCassaforte() {
  if (enigma6Completato) return

  if (numeroSottoFreccia() !== combinazioneEnigma6[passoCassaforte]) {
    passoCassaforte = 0
    messaggioCassaforte = 'Numero sbagliato: la serie riparte da capo'
  } else if (ultimaDirezioneManopola !== direzioneRichiesta()) {
    passoCassaforte = 0
    messaggioCassaforte = 'Numero giusto, ma hai girato dal lato sbagliato: la serie riparte da capo'
  } else {
    passoCassaforte++
    messaggioCassaforte = 'Click! Numero giusto'
  }
  ultimaDirezioneManopola = 0 // il numero successivo va girato di nuovo da zero

  if (passoCassaforte === combinazioneEnigma6.length) {
    enigma6Completato = true
    disegnaCassaforte()
    setTimeout(function () {
      mostraMessaggioVittoriaEnigma6()
    }, 900)
    return
  }

  disegnaCassaforte()
}

// --- Rotazione della manopola trascinandola (mouse, dito o penna) ---
// Come per il puzzle, questi listener sono registrati una sola volta e
// controllano da soli, guardando il DOM, se la manopola è davvero a schermo.

let trascinamentoManopola = null // { centroX, centroY, angoloPrecedente }

// --- Suoni (indizi) ---
// Ogni volta che la manopola passa su un nuovo numero si sente un "click".
// Più si è vicini al numero giusto, più il click è acuto e forte; sul numero
// esatto si sente un "clunk" diverso. I suoni sono generati al volo con la
// Web Audio API (nessun file audio da aggiungere). Su telefono (se supportato)
// c'è anche una breve vibrazione quando si è vicini.

let contestoAudio = null
let ultimoNumeroManopola = 0

function preparaAudio() {
  if (!contestoAudio) {
    const ContestoAudio = window.AudioContext || window.webkitAudioContext
    if (!ContestoAudio) return
    contestoAudio = new ContestoAudio()
  }
  if (contestoAudio.state === 'suspended') contestoAudio.resume()
}

function suonaNota(frequenza, volume, durata, tipo) {
  const inizio = contestoAudio.currentTime
  const oscillatore = contestoAudio.createOscillator()
  const guadagno = contestoAudio.createGain()
  oscillatore.type = tipo
  oscillatore.frequency.value = frequenza
  guadagno.gain.setValueAtTime(volume, inizio)
  guadagno.gain.exponentialRampToValueAtTime(0.0001, inizio + durata)
  oscillatore.connect(guadagno)
  guadagno.connect(contestoAudio.destination)
  oscillatore.start(inizio)
  oscillatore.stop(inizio + durata)
}

function suonoNumeroManopola(numero) {
  if (!contestoAudio) return

  const bersaglio = combinazioneEnigma6[passoCassaforte]
  const differenza = Math.abs(numero - bersaglio)
  const distanza = Math.min(differenza, 100 - differenza) // la manopola è circolare

  if (distanza === 0) {
    // numero esatto: un "clunk" grave seguito da un tintinnio acuto
    suonaNota(160, 0.35, 0.14, 'triangle')
    suonaNota(1100, 0.18, 0.2, 'sine')
    if (navigator.vibrate) navigator.vibrate([30, 40, 30])
    return
  }

  // vicinanza da 0 (lontano) a 1 (a un passo): cresce solo negli ultimi ~20 numeri
  const vicinanza = Math.pow(Math.max(0, 1 - distanza / 20), 2)
  suonaNota(300 + vicinanza * 900, 0.03 + vicinanza * 0.14, 0.04, 'square')
  if (vicinanza > 0.5 && navigator.vibrate) navigator.vibrate(10)
}

function angoloPuntatore(event, centroX, centroY) {
  return Math.atan2(event.clientY - centroY, event.clientX - centroX) * 180 / Math.PI
}

document.addEventListener('pointerdown', function (event) {
  const manopola = event.target.closest('.manopola-cassaforte')
  if (!manopola || enigma6Completato) return

  preparaAudio() // il browser permette l'audio solo dopo un gesto dell'utente
  ultimoNumeroManopola = numeroSottoFreccia()

  // Il centro non cambia anche se la manopola è ruotata.
  const rettangolo = manopola.getBoundingClientRect()
  const centroX = rettangolo.left + rettangolo.width / 2
  const centroY = rettangolo.top + rettangolo.height / 2

  trascinamentoManopola = {
    centroX: centroX,
    centroY: centroY,
    angoloPrecedente: angoloPuntatore(event, centroX, centroY)
  }
})

document.addEventListener('pointermove', function (event) {
  if (!trascinamentoManopola) return

  const manopola = document.querySelector('.manopola-cassaforte')
  if (!manopola) {
    trascinamentoManopola = null
    return
  }

  const angoloAttuale = angoloPuntatore(event, trascinamentoManopola.centroX, trascinamentoManopola.centroY)
  let differenza = angoloAttuale - trascinamentoManopola.angoloPrecedente
  // Evita il "salto" quando si passa da +180° a -180°.
  if (differenza > 180) differenza -= 360
  if (differenza < -180) differenza += 360

  angoloManopola += differenza
  if (differenza > 0.3) ultimaDirezioneManopola = 1
  else if (differenza < -0.3) ultimaDirezioneManopola = -1
  trascinamentoManopola.angoloPrecedente = angoloAttuale

  // Aggiorniamo il DOM sul posto (niente ridisegno completo, altrimenti
  // il trascinamento verrebbe interrotto a ogni movimento).
  manopola.style.transform = `rotate(${angoloManopola}deg)`
  const numero = numeroSottoFreccia()
  document.querySelector('.numero-attuale-cassaforte').textContent = String(numero).padStart(2, '0')

  if (numero !== ultimoNumeroManopola) {
    ultimoNumeroManopola = numero
    suonoNumeroManopola(numero)
  }
})

function terminaTrascinamentoManopola() {
  trascinamentoManopola = null
}
document.addEventListener('pointerup', terminaTrascinamentoManopola)
document.addEventListener('pointercancel', terminaTrascinamentoManopola)

// =============================================================================
// UNICO listener globale su #app: siccome #app non viene mai distrutto
// (solo il suo contenuto interno cambia), questo listener funziona sempre,
// indipendentemente da quante volte richiami mostraHub()/mostraEnigmaX().
// =============================================================================

document.querySelector('#app').addEventListener('click', function (event) {
  // click su "Vai alla home" nel messaggio di vittoria
  if (event.target.closest('.vai-home')) {
    mostraHub()
    return
  }

  // click sul bottone "Verifica" del codice finale, nella home
  if (event.target.closest('.controlla-codice-finale')) {
    controllaCodiceFinale()
    return
  }

  // click su un puntino della timeline viaggi
  const puntoViaggio = event.target.closest('.punto-viaggio')
  if (puntoViaggio) {
    mostraDettaglioViaggio(Number(puntoViaggio.dataset.indice))
    return
  }

  // click su "Torna alla timeline" nel dettaglio di un viaggio
  if (event.target.closest('.vai-viaggi')) {
    mostraViaggi()
    return
  }

  // "Quanto mi conosci": click su un'opzione di risposta
  const elementoOpzioneQMC = event.target.closest('.opzione-qmc')
  if (elementoOpzioneQMC && !elementoOpzioneQMC.classList.contains('disabilitata')) {
    gestisciClickOpzioneQMC(elementoOpzioneQMC)
    return
  }

  // "Quanto mi conosci": click su "Rigioca" nella schermata del risultato
  if (event.target.closest('.rigioca-qmc')) {
    mostraQuantoMiConosci()
    return
  }


  // click su un bottone "Play" dell'hub
  const card = event.target.closest('.enigma-card')
  if (card && event.target.closest('button')) {
    const numero = card.dataset.enigma
    if (numero === '1') mostraEnigma1()
    else if (numero === '2') mostraEnigma2()
    else if (numero === '3') mostraEnigma3()
    else if (numero === '4') mostraEnigma4()
    else if (numero === '5') mostraEnigma5()
    else if (numero === '6') mostraEnigma6()
    return
  }

  // Enigma 2: click su una carta del memory
  const elementoCarta = event.target.closest('.carta')
  if (elementoCarta) {
    gestisciClickCarta(elementoCarta)
    return
  }

  // Enigma 3: click su un'opzione del quiz
  const elementoOpzione = event.target.closest('.opzione-quiz')
  if (elementoOpzione) {
    gestisciClickOpzione(elementoOpzione)
    return
  }

  // Enigma 4: click su un evento della timeline
  const elementoEvento = event.target.closest('.evento-timeline')
  if (elementoEvento) {
    gestisciClickEvento(elementoEvento)
    return
  }

  // Enigma 5: click su un'opzione di una frase da completare
  const elementoOpzioneFrase = event.target.closest('.opzione-frase')
  if (elementoOpzioneFrase && !elementoOpzioneFrase.disabled) {
    gestisciClickOpzioneFrase(elementoOpzioneFrase)
    return
  }

  // Enigma 6: click su "Conferma" della cassaforte
  if (event.target.closest('.conferma-cassaforte')) {
    gestisciConfermaCassaforte()
    return
  }
})

// Home: invio del codice finale anche premendo Invio nel suo campo
document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter' && event.target.id === 'inputCodiceFinale') {
    controllaCodiceFinale()
  }
})

// =============================================================================
// Listener separato per la navbar: è fuori da #app, quindi serve un
// listener dedicato. Impediamo la navigazione reale del browser
// (preventDefault) e gestiamo il click via JS come per il resto del sito.
// =============================================================================

document.querySelector('.hub-nav').addEventListener('click', function (event) {
  const link = event.target.closest('a')
  if (!link) return

  event.preventDefault()

  if (link.getAttribute('href') === 'page1') {
    mostraHub()
  }
  if (link.getAttribute('href') === 'page2') {
    mostraSpiegazione()
  }
  if (link.getAttribute('href') === 'page3') {
    mostraChiSiamo()
  }
  if (link.getAttribute('href') === 'page4') {
    mostraContatti()
  }
  if (link.getAttribute('href') === 'page5') {
    toggleVisibilitaLettoreCanzone()
  }
  if (link.getAttribute('href') === 'page6' && codiceSbloccato) {
    mostraViaggi()
  }
  if (link.getAttribute('href') === 'page7' && codiceSbloccato) {
    mostraCose()
  }
  if (link.getAttribute('href') === 'page9' && codiceSbloccato) {
    mostraRegalo()
  }
  if (link.getAttribute('href') === 'page8') {
    mostraQuantoMiConosci()
  }
})

aggiornaVisibilitaVociRiservate()
mostraHub()