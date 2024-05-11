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
const resultDisp = document.querySelector('#points')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'animales/dorso.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log()
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'animales/dorso')
        cards[optionTwoId].setAttribute('src', 'animales/dorso')
        alert('Second match')
    }

   if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'animales/dorso')
        cards[optionTwoId].setAttribute('src', 'animales/dorso')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    
    } else {
        cards[optionOneId].setAttribute('src', 'animales/dorso.jpg')
        cards[optionTwoId].setAttribute('src', 'animales/dorso.jpg')
        alert('Sorry, try agin!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisp.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2) {
        resultDisp.textContent = 'Congratulations!';
    }
}


function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkMatch, 500)
    }
   }





