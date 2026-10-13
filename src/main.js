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

      <p>Nella home trovi <strong>6 enigmi</strong>. Ogni enigma è un piccolo gioco diverso dagli altri: un cifrario, un memory, un quiz, una linea del tempo, un puzzle scorrevole e un gioco di parole.</p>

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
      ${codiceSbloccato ? '<button class="vai-pagina-finale">Rivedi la pagina finale</button>' : ''}
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

function controllaCodiceFinale() {
  const input = document.querySelector('#inputCodiceFinale')
  const valoreInserito = input.value.trim()
  const codiceCorretto = cifreCodice.join('')

  if (valoreInserito === codiceCorretto) {
    codiceSbloccato = true
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
      <button class="vai-home">Torna alla home</button>
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
  // visibili SOLO Viaggi e Canzone (Home/Spiegazione/Chi siamo/Contatti
  // scompaiono dal menu — restano comunque raggiungibili dai bottoni "Torna
  // alla home" dentro le pagine).
  const listaLink = document.querySelector('#listaLink')
  if (listaLink) {
    listaLink.innerHTML = `
      <li><a href="page6">Viaggi</a></li>
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
// PAGINA "I NOSTRI VIAGGI": una linea del tempo dal 2019 a oggi, con un
// puntino per ogni viaggio. Al passaggio del mouse (gestito in puro CSS,
// nessun JS necessario per il tooltip) appare il nome del viaggio. Al click
// si apre una schermata a pieno sfondo con le 4 foto di quel viaggio, un
// gradiente sopra (colore in base al viaggio) per rendere leggibile il testo,
// e una cornice colorata in tema.
//
// *** DA PERSONALIZZARE ***: modifica/aggiungi viaggi nell'array "viaggi" —
// anno, nome, le 4 foto vere, e il colore tema. "Parigi" qui sotto è
// l'esempio che hai chiesto, con foto placeholder casuali da sostituire.
// =============================================================================

const annoInizioTimeline = 2019
const annoFineTimeline = new Date().getFullYear()

const viaggi = [
  {
    anno: 2019,
    nome: 'Parigi',
    colore: '#1a2a52', // blu notte — tema "Parigi"
    foto: [
      'https://picsum.photos/400?random=101',
      'https://picsum.photos/400?random=102',
      'https://picsum.photos/400?random=103',
      'https://picsum.photos/400?random=104'
    ]
  },
  {
    anno: 2021,
    nome: '[VIAGGIO DA PERSONALIZZARE]',
    colore: '#7a4b2f',
    foto: [
      'https://picsum.photos/400?random=105',
      'https://picsum.photos/400?random=106',
      'https://picsum.photos/400?random=107',
      'https://picsum.photos/400?random=108'
    ]
  },
  {
    anno: 2023,
    nome: '[VIAGGIO DA PERSONALIZZARE]',
    colore: '#2f6b4f',
    foto: [
      'https://picsum.photos/400?random=109',
      'https://picsum.photos/400?random=110',
      'https://picsum.photos/400?random=111',
      'https://picsum.photos/400?random=112'
    ]
  }
]

function calcolaPosizionePercento(anno) {
  return ((anno - annoInizioTimeline) / (annoFineTimeline - annoInizioTimeline)) * 100
}

function mostraViaggi() {
  const puntiHTML = viaggi.map(function (viaggio, indice) {
    const posizione = calcolaPosizionePercento(viaggio.anno)
    return `
      <div class="punto-viaggio" style="left:${posizione}%" data-indice="${indice}">
        <span class="tooltip-viaggio">${viaggio.nome}</span>
      </div>
    `
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="pagina-viaggi">
      <h1>I nostri viaggi</h1>
      <div class="timeline-viaggi-container">
        <div class="linea-timeline"></div>
        ${puntiHTML}
        <span class="etichetta-anno etichetta-anno-inizio">${annoInizioTimeline}</span>
        <span class="etichetta-anno etichetta-anno-fine">${annoFineTimeline}</span>
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
        <p>${viaggio.anno}</p>
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
// ENIGMA 1 (puzzle a incastro): una vostra foto divisa in 16 pezzi (griglia
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
// Due dettagli aggiunti apposta:
// 1) "latoPezzoPuzzle1" è una dimensione FISSA in pixel, usata sia per i
//    pezzi nel vassoio sia per quelli nella griglia: così un pezzo non
//    cambia mai grandezza spostandosi, e la griglia stessa ha sempre
//    esattamente la dimensione giusta per contenerli (calcolata da JS,
//    non un numero fisso scritto a mano nel CSS).
// 2) Ogni pezzo ha una vera forma a incastro (linguette/incavi), disegnata
//    con un "ritaglio" CSS (clip-path) generato automaticamente: i bordi
//    interni della griglia vengono decisi una sola volta quando il puzzle
//    viene creato, così il pezzo A e il pezzo B che si toccano hanno
//    sempre forme complementari (dove uno sporge, l'altro ha l'incavo).
//
// *** DA PERSONALIZZARE ***: immaginePuzzle1 con una vostra foto vera.
// =============================================================================

const immaginePuzzle1 = 'https://picsum.photos/450?random=400'
const dimensionePuzzle1 = 4 // griglia 4x4 = 16 pezzi
const latoPezzoPuzzle1 = 76 // dimensione fissa, in pixel, di OGNI pezzo

let enigma1GiaCreato = false
let enigma1Completato = false
let slotPuzzle1 = [] // 16 posizioni: null (vuota) oppure l'id del pezzo che occupa quella casella
let vassoioPuzzle1 = [] // id dei pezzi ancora nel vassoio, mescolati
let formePezziPuzzle1 = [] // per ogni pezzo, {sopra,sotto,sinistra,destra}: 0 = bordo dritto, 1 = linguetta, -1 = incavo

function creaPuzzle1() {
  const totalePezzi = dimensionePuzzle1 * dimensionePuzzle1
  slotPuzzle1 = new Array(totalePezzi).fill(null)
  vassoioPuzzle1 = mescola(
    Array.from({ length: totalePezzi }, function (_, i) { return i })
  )

  // Decidiamo, UNA SOLA VOLTA, se ogni bordo INTERNO della griglia ha una
  // linguetta o un incavo, così i due pezzi che condividono quel bordo
  // ottengono forme opposte (dove uno sporge, l'altro è incavato: combaciano).
  const bordiOrizzontali = [] // bordiOrizzontali[riga][colonna]: confine tra la riga e quella sotto
  for (let riga = 0; riga < dimensionePuzzle1 - 1; riga++) {
    bordiOrizzontali.push([])
    for (let colonna = 0; colonna < dimensionePuzzle1; colonna++) {
      bordiOrizzontali[riga].push(Math.random() < 0.5 ? 1 : -1)
    }
  }

  const bordiVerticali = [] // bordiVerticali[riga][colonna]: confine tra la colonna e quella a destra
  for (let riga = 0; riga < dimensionePuzzle1; riga++) {
    bordiVerticali.push([])
    for (let colonna = 0; colonna < dimensionePuzzle1 - 1; colonna++) {
      bordiVerticali[riga].push(Math.random() < 0.5 ? 1 : -1)
    }
  }

  formePezziPuzzle1 = []
  for (let idPezzo = 0; idPezzo < totalePezzi; idPezzo++) {
    const riga = Math.floor(idPezzo / dimensionePuzzle1)
    const colonna = idPezzo % dimensionePuzzle1

    formePezziPuzzle1.push({
      sopra: riga === 0 ? 0 : -bordiOrizzontali[riga - 1][colonna],
      sotto: riga === dimensionePuzzle1 - 1 ? 0 : bordiOrizzontali[riga][colonna],
      sinistra: colonna === 0 ? 0 : -bordiVerticali[riga][colonna - 1],
      destra: colonna === dimensionePuzzle1 - 1 ? 0 : bordiVerticali[riga][colonna]
    })
  }
}

// Disegna UN lato del pezzo, da (x1,y1) a (x2,y2): se "tipo" è 0 resta un
// bordo dritto; altrimenti ci costruisce sopra una "linguetta" rotonda che
// sporge verso l'esterno (tipo 1) o un incavo verso l'interno (tipo -1).
function segmentoBordoPuzzle1(x1, y1, x2, y2, tipo) {
  if (tipo === 0) {
    return ` L ${x2} ${y2}`
  }

  const dx = x2 - x1
  const dy = y2 - y1
  const lunghezza = Math.hypot(dx, dy)
  const ux = dx / lunghezza
  const uy = dy / lunghezza
  // Il percorso del pezzo gira in senso orario: la normale che punta verso
  // l'ESTERNO del pezzo si ottiene ruotando la direzione del bordo di -90°.
  const nx = uy
  const ny = -ux

  // Raggio della linguetta: con due curve di Bézier cubiche (ognuna un
  // quarto di cerchio, costante di kappa 0.5523) disegniamo una vera
  // semicirconferenza invece di una punta aguzza, così anche quando due
  // incavi si trovano su lati opposti dello stesso pezzo non si "mangiano"
  // a vicenda creando la forma a clessidra.
  const raggio = lunghezza * 0.14
  const k = 0.5523
  const verso = tipo

  const medioX = (x1 + x2) / 2
  const medioY = (y1 + y2) / 2

  const collo1 = { x: medioX - ux * raggio, y: medioY - uy * raggio }
  const collo2 = { x: medioX + ux * raggio, y: medioY + uy * raggio }
  const apice = { x: medioX + nx * raggio * verso, y: medioY + ny * raggio * verso }

  const c1 = { x: collo1.x + nx * raggio * verso * k, y: collo1.y + ny * raggio * verso * k }
  const c2 = { x: apice.x - ux * raggio * k, y: apice.y - uy * raggio * k }
  const c3 = { x: apice.x + ux * raggio * k, y: apice.y + uy * raggio * k }
  const c4 = { x: collo2.x + nx * raggio * verso * k, y: collo2.y + ny * raggio * verso * k }

  return ` L ${collo1.x} ${collo1.y}` +
    ` C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${apice.x} ${apice.y}` +
    ` C ${c3.x} ${c3.y} ${c4.x} ${c4.y} ${collo2.x} ${collo2.y}` +
    ` L ${x2} ${y2}`
}

// Costruisce l'intero contorno del pezzo (i 4 lati, uno dopo l'altro) e lo
// restituisce come valore pronto per la proprietà CSS clip-path.
function generaClipPathPezzo(idPezzo) {
  const forma = formePezziPuzzle1[idPezzo]
  const L = latoPezzoPuzzle1

  let percorso = 'M 0 0'
  percorso += segmentoBordoPuzzle1(0, 0, L, 0, forma.sopra)
  percorso += segmentoBordoPuzzle1(L, 0, L, L, forma.destra)
  percorso += segmentoBordoPuzzle1(L, L, 0, L, forma.sotto)
  percorso += segmentoBordoPuzzle1(0, L, 0, 0, forma.sinistra)
  percorso += ' Z'

  return `path('${percorso}')`
}

// Calcola lo sfondo del pezzo "idPezzo": l'immagine intera, ingrandita e
// spostata in modo che si veda solo il riquadro corrispondente a quel pezzo,
// più il ritaglio (clip-path) che gli dà la forma a incastro.
function stileSfondoPezzoPuzzle1(idPezzo) {
  const riga = Math.floor(idPezzo / dimensionePuzzle1)
  const colonna = idPezzo % dimensionePuzzle1
  const passo = 100 / (dimensionePuzzle1 - 1)
  const clipPath = generaClipPathPezzo(idPezzo)

  return `width:${latoPezzoPuzzle1}px; height:${latoPezzoPuzzle1}px; background-image:url('${immaginePuzzle1}'); background-size:${dimensionePuzzle1 * 100}% ${dimensionePuzzle1 * 100}%; background-position:${colonna * passo}% ${riga * passo}%; clip-path:${clipPath}; -webkit-clip-path:${clipPath};`
}

function disegnaPuzzle1() {
  const slotHTML = slotPuzzle1.map(function (idPezzo, indice) {
    const stileSlot = `width:${latoPezzoPuzzle1}px; height:${latoPezzoPuzzle1}px;`
    if (idPezzo === null) {
      return `<div class="slot-puzzle1" data-indice="${indice}" style="${stileSlot}"></div>`
    }
    return `
      <div class="slot-puzzle1" data-indice="${indice}" style="${stileSlot}">
        <div class="pezzo-puzzle1" data-pezzo="${idPezzo}" data-da="slot" data-da-indice="${indice}" style="${stileSfondoPezzoPuzzle1(idPezzo)}"></div>
      </div>
    `
  }).join('')

  const vassoioHTML = vassoioPuzzle1.map(function (idPezzo) {
    return `<div class="pezzo-puzzle1" data-pezzo="${idPezzo}" data-da="vassoio" style="${stileSfondoPezzoPuzzle1(idPezzo)}"></div>`
  }).join('')

  const latoGriglia = dimensionePuzzle1 * latoPezzoPuzzle1

  document.querySelector('#app').innerHTML = `
    <div class="puzzle1-container">
      <p class="istruzioni-puzzle1">Trascina i pezzi nella griglia per ricomporre la foto</p>
      <div class="puzzle1-area">
        <div class="griglia-puzzle1" style="grid-template-columns:repeat(${dimensionePuzzle1}, ${latoPezzoPuzzle1}px); grid-template-rows:repeat(${dimensionePuzzle1}, ${latoPezzoPuzzle1}px); width:${latoGriglia}px; height:${latoGriglia}px;">${slotHTML}</div>
        <div class="vassoio-puzzle1">${vassoioHTML}</div>
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

  const elementoSotto = document.elementFromPoint(event.clientX, event.clientY)
  const slotDestinazione = elementoSotto ? elementoSotto.closest('.slot-puzzle1') : null
  const vassoioDestinazione = elementoSotto ? elementoSotto.closest('.vassoio-puzzle1') : null

  if (slotDestinazione) {
    spostaPezzoPuzzle1(trascinamento, { tipo: 'slot', indice: Number(slotDestinazione.dataset.indice) })
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
// ENIGMA 5 (puzzle scorrevole 3x3): 8 tessere numerate + uno spazio vuoto.
// Click su una tessera adiacente al vuoto per spostarla.
//
// *** DA PERSONALIZZARE ***: per usare una foto vera al posto dei numeri,
// vedi il commento dentro disegnaPuzzle() più sotto. Più il messaggio finale.
// =============================================================================

let puzzleStato = []
let puzzleGiaCreato = false
let puzzleCompletato = false

function posizioniAdiacenti(indice) {
  const riga = Math.floor(indice / 3)
  const colonna = indice % 3
  const adiacenti = []
  if (riga > 0) adiacenti.push(indice - 3)
  if (riga < 2) adiacenti.push(indice + 3)
  if (colonna > 0) adiacenti.push(indice - 1)
  if (colonna < 2) adiacenti.push(indice + 1)
  return adiacenti
}

function creaPuzzle() {
  puzzleStato = [1, 2, 3, 4, 5, 6, 7, 8, null] // stato risolto: null è lo spazio vuoto

  // Mescoliamo facendo 200 mosse valide casuali a partire dallo stato risolto:
  // così il puzzle è SEMPRE risolvibile (mescolare a caso le posizioni non lo garantirebbe).
  for (let i = 0; i < 200; i++) {
    const indiceVuoto = puzzleStato.indexOf(null)
    const adiacenti = posizioniAdiacenti(indiceVuoto)
    const scelta = adiacenti[Math.floor(Math.random() * adiacenti.length)]
    puzzleStato[indiceVuoto] = puzzleStato[scelta]
    puzzleStato[scelta] = null
  }
}

function disegnaPuzzle() {
  const html = puzzleStato.map(function (valore, indice) {
    if (valore === null) {
      return `<div class="tessera vuota" data-indice="${indice}"></div>`
    }
    // *** PER USARE UNA FOTO VERA ***: invece di "${valore}" come testo,
    // genera uno sfondo con background-position calcolato dal numero,
    // es. style="background-image:url('...'); background-position:...".
    // Per ora resta con i numeri placeholder.
    return `<div class="tessera" data-indice="${indice}">${valore}</div>`
  }).join('')

  document.querySelector('#app').innerHTML = `<div class="puzzle-grid">${html}</div>`
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
  if (!puzzleGiaCreato) {
    creaPuzzle()
    puzzleGiaCreato = true
  }
  disegnaPuzzle()

  if (puzzleCompletato) {
    mostraMessaggioVittoriaEnigma5()
  }
}

function gestisciClickTessera(elementoTessera) {
  const indice = Number(elementoTessera.dataset.indice)
  const indiceVuoto = puzzleStato.indexOf(null)

  const adiacenti = posizioniAdiacenti(indiceVuoto)
  if (!adiacenti.includes(indice)) return // non è adiacente al vuoto: click ignorato

  puzzleStato[indiceVuoto] = puzzleStato[indice]
  puzzleStato[indice] = null
  disegnaPuzzle()

  const risolto = puzzleStato.every(function (valore, i) {
    if (i === 8) return valore === null
    return valore === i + 1
  })

  if (risolto) {
    puzzleCompletato = true
    setTimeout(function () {
      mostraMessaggioVittoriaEnigma5()
    }, 400)
  }
}

// =============================================================================
// ENIGMA 6 (parole nascoste): una serie di parole con le lettere mescolate,
// da ricostruire cliccandole nell'ordine giusto.
//
// NOTA IMPORTANTE: un vero cruciverba (griglia con parole incrociate e
// indizi numerati) è molto più complesso da costruire in vanilla JS — per
// restare nei tempi ho implementato questa versione semplificata (lettere
// mescolate, non griglia incrociata). Se vuoi il cruciverba vero lo
// costruiamo come step successivo, ha senso solo se resta tempo a fine lista.
//
// *** DA PERSONALIZZARE ***: le parole in "paroleNascoste" (tutte MAIUSCOLE,
// senza spazi), e il testo del messaggio finale.
// =============================================================================

const paroleNascoste = [
  { soluzione: 'PAROLA1' },
  { soluzione: 'PAROLA2' },
  { soluzione: 'PAROLA3' }
]

let indiceParolaCorrente = 0
let lettereMescolate = []
let tentativoAttuale = []
let parolaInizializzata = false
let paroleCompletate = false

function mescolaLettereParola(parola) {
  const lettere = parola.split('').map(function (lettera, indice) {
    return { id: indice, lettera: lettera }
  })
  return mescola(lettere)
}

function iniziaParolaCorrente() {
  const parola = paroleNascoste[indiceParolaCorrente].soluzione
  lettereMescolate = mescolaLettereParola(parola)
  tentativoAttuale = []
}

function disegnaParolaNascosta() {
  const lettereHTML = lettereMescolate.map(function (l) {
    const classeUsata = tentativoAttuale.includes(l.id) ? 'usata' : ''
    return `<div class="lettera-tile ${classeUsata}" data-id="${l.id}">${l.lettera}</div>`
  }).join('')

  const tentativoTesto = tentativoAttuale.map(function (id) {
    return lettereMescolate.find(function (l) {
      return l.id === id
    }).lettera
  }).join('')

  document.querySelector('#app').innerHTML = `
    <div class="parola-container">
      <p class="progresso-parole">Parola ${indiceParolaCorrente + 1} di ${paroleNascoste.length}</p>
      <div class="tentativo-attuale">${tentativoTesto}</div>
      <div class="lettere-grid">${lettereHTML}</div>
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
  if (!parolaInizializzata) {
    iniziaParolaCorrente()
    parolaInizializzata = true
  }
  disegnaParolaNascosta()

  if (paroleCompletate) {
    mostraMessaggioVittoriaEnigma6()
  }
}

function gestisciClickLettera(elementoLettera) {
  const id = Number(elementoLettera.dataset.id)
  if (tentativoAttuale.includes(id)) return // lettera già usata nel tentativo corrente

  tentativoAttuale.push(id)
  disegnaParolaNascosta()

  const soluzione = paroleNascoste[indiceParolaCorrente].soluzione

  if (tentativoAttuale.length === soluzione.length) {
    const tentativoTesto = tentativoAttuale.map(function (idLettera) {
      return lettereMescolate.find(function (l) {
        return l.id === idLettera
      }).lettera
    }).join('')

    if (tentativoTesto === soluzione) {
      indiceParolaCorrente = indiceParolaCorrente + 1

      if (indiceParolaCorrente >= paroleNascoste.length) {
        paroleCompletate = true
        setTimeout(function () {
          mostraMessaggioVittoriaEnigma6()
        }, 400)
      } else {
        setTimeout(function () {
          iniziaParolaCorrente()
          disegnaParolaNascosta()
        }, 400)
      }
    } else {
      // parola sbagliata: svuota il tentativo e ricomincia la stessa parola
      setTimeout(function () {
        tentativoAttuale = []
        disegnaParolaNascosta()
      }, 600)
    }
  }
}

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

  // click sul bottone "Rivedi la pagina finale", nella home (solo se già sbloccata)
  if (event.target.closest('.vai-pagina-finale')) {
    mostraPaginaFinale()
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

  // Enigma 5: click su una tessera del puzzle scorrevole
  const elementoTessera = event.target.closest('.tessera')
  if (elementoTessera) {
    gestisciClickTessera(elementoTessera)
    return
  }

  // Enigma 6: click su una lettera
  const elementoLettera = event.target.closest('.lettera-tile')
  if (elementoLettera) {
    gestisciClickLettera(elementoLettera)
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
  if (link.getAttribute('href') === 'page6') {
    mostraViaggi()
  }
  if (link.getAttribute('href') === 'page7') {
    mostraCose()
  }
  if (link.getAttribute('href') === 'page8') {
    mostraQuantoMiConosci()
  }
})

mostraHub()