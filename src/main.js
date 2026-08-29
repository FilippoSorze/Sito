import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="hub-header">
    <h1>Titolo</h1>
  </header>

  <main class="enigma-grid">
    <button class="enigma-card" data-enigma="1">Enigma 1</button>
    <button class="enigma-card" data-enigma="2">Enigma 2</button>
    <button class="enigma-card" data-enigma="3">Enigma 3</button>
    <button class="enigma-card" data-enigma="4">Enigma 4</button>
    <button class="enigma-card" data-enigma="5">Enigma 5</button>
    <button class="enigma-card" data-enigma="6">Enigma 6</button>
  </main>
`