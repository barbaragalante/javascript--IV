const cardSection = document.getElementById('cards-section')

renderizaCarta = carta =>{
    const novaCarta = new Card(carta).render()
  // cardSection.innerHTML = novaCarta
}

fetch('tarot.json').then(response =>{
    return response.json()
}).then(json =>{
    console.log(json)
    renderizaCarta(selecionaCartaAleatoria[json])
})

selecionaCartaAleatoria = cartas => {
    let numeroAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[numeroAleatorio]
}

async function carregaCartas() {
    const response = await fetch('tarot.json')
    const json = await response.json()
    renderizaCarta(selecionaCartaAleatoria[json])
}

carregaCartas()
novaCarta = () => {
    carregaCartas()
}


