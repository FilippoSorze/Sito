import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="hub-header">
    <h1 class="titolo">Titolo</h1>
  </header>

  <main class="enigma-grid">
    <div class="enigma-card" data-enigma="1"><div class="nomeEnigma">a</div><button class="bottone">Enigma 1</button></div>
    <div class="enigma-card" data-enigma="2"><div class="nomeEnigma">a</div><button class="bottone">Enigma 2</button></div>
    <div class="enigma-card" data-enigma="3"><div class="nomeEnigma">a</div><button class="bottone">Enigma 3</button></div>
    <div class="enigma-card" data-enigma="4"><div class="nomeEnigma">a</div><button class="bottone">Enigma 4</button></div>
    <div class="enigma-card" data-enigma="5"><div class="nomeEnigma">a</div><button class="bottone">Enigma 5</button></div>
    <div class="enigma-card" data-enigma="6"><div class="nomeEnigma">a</div><button class="bottone">Enigma 6</button></div>
  </main>
`