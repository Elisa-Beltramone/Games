const cardArray = [
    {
        name: 'tortuga',
        img: 'animales/tortuga.jpeg'
    },
    {
        name: 'ballena',
        img: 'animales/ballena.jpeg'
    },
    {
        name: 'caballo',
        img: 'animales/caballo.jpeg'
    },
    {
        name: 'mono',
        img: 'animales/mono.jpeg'
    },
    {
        name: 'pajaro',
        img: 'animales/pajaro.jpeg'
    },
    {
        name: 'conejo',
        img: 'animales/conejo.jpeg'
    },
    {
        name: 'tortuga',
        img: 'animales/tortuga.jpeg'
    },
    {
        name: 'ballena',
        img: 'animales/ballena.jpeg'
    },
    {
        name: 'caballo',
        img: 'animales/caballo.jpeg'
    },
    {
        name: 'mono',
        img: 'animales/mono.jpeg'
    },
    {
        name: 'pajaro',
        img: 'animales/pajaro.jpeg'
    },
    {
        name: 'conejo',
        img: 'animales/conejo.jpeg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'animales/dorso.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        }
}
createBoard()

function checkMatch() {
  const cards =  document.querySelector('#grid img')

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
    cards[cardsChosenIds[0].setAttribute('src', 'animales/dorso')]
    cards[cardsChosenIds[1].setAttribute('src', 'animales/dorso')]

    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    console.log('clicked', cardId)
    console.log('cardsChosen')

}




