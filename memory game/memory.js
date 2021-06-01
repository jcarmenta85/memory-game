

const cardArray = [
    {
        name: 'fries',
        img: 'images/memory-game-fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/memory-game-cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/memory-game-ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/memory-game-pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/memory-game-milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/memory-game-hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/memory-game-fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/memory-game-cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/memory-game-ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/memory-game-pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/memory-game-milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/memory-game-hotdog.png'
    },
]

// cardArray.sort(() => 0.5 - Math.random())

// const grid = document.querySelector('.grid')
// const resultDisplay = document.querySelector('#result')
// let cardsChose = []
// let cardsChoseIds = []
// let cardsWon = []


// function createBoard(){
//     for(let i = 0; i < cardArray.length; i++){
//         const card = document.createElement('img')
//         card.setAttribute('src', 'images/memory-game-blank.png')
//         card.addEventListener('click', flipCard )
//         card.setAttribute('data-id', i)
//         grid.appendChild(card)
//     }
// }


// function flipCard(){
//     let cardId = this.getAttribute('data-id')
//     cardsChose.push(cardArray[cardId].name)
//     cardsChoseIds.push(cardId)
//     this.setAttribute('src', cardArray[cardId].img)
//     if(cardsChose.length === 2){
//         setTimeout(checkForMatch, 500)
    
//     }
    
// }

// function checkForMatch(){
//     const cards = document.querySelectorAll('img')
//     const gameWon = document.querySelector('#game-won')
//     const optionOneId = cardsChoseIds[0]
//     const optionTwoId = cardsChoseIds[1]
   
//     if(optionOneId === optionTwoId){
//         alert('YOU HAVE CLICKED THE SAME IMAGE')
//         cards[optionOneId].setAttribute('src', 'images/memory-game-blank.png')
//         cards[optionTwoId].setAttribute('src', 'images/memory-game-blank.png')
//     }else if(cardsChose[0] === cardsChose[1]){
//         cards[optionOneId].setAttribute('src', 'images/memory-game-white.png')
//         cards[optionTwoId].setAttribute('src', 'images/memory-game-white.png')
//         cards[optionOneId].removeEventListener('click', flipCard)
//         cards[optionTwoId].removeEventListener('click', flipCard)
//         cardsWon.push(cardsChose)
//     }else{
//         cards[optionOneId].setAttribute('src', 'images/memory-game-blank.png')
//         cards[optionTwoId].setAttribute('src', 'images/memory-game-blank.png')
//     }
//     cardsChose = []
//     cardsChoseIds = []    
//     resultDisplay.textContent = cardsWon.length
//     if(cardsWon.length === cardArray.length / 2){
//         gameWon.textContent = 'YOU WIN'
//     }
    
   
    
// }
// createBoard()

cardArray.sort(() => 0.5 - Math.random())

let grid = document.querySelector('.grid')
let displayScore = document.querySelector('#result')
let displayYouWin = document.querySelector('#game-won')

let cardsChosen = []
let cardsChosenIds = []
let correctPairs = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/memory-game-blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }

}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch(){
    let cards = document.querySelectorAll('img')
    let card1 = cardsChosenIds[0]
    let card2 = cardsChosenIds[1]

    if(card1 === card2){
        alert('YOU CLICKED THE SAME CARD')
        cards[card1].setAttribute('src', 'images/memory-game-blank.png')
        cards[card2].setAttribute('src', 'images/memory-game-blank.png')
    }else if(cardsChosen[0] === cardsChosen[1]){
        cards[card1].setAttribute('src', 'images/memory-game-white.png')
        cards[card2].setAttribute('src', 'images/memory-game-white.png')
        cards[card1].removeEventListener('click', flipCard)
        cards[card2].removeEventListener('click', flipCard)
        correctPairs.push(cardsChosen)
    }else{
        cards[card1].setAttribute('src', 'images/memory-game-blank.png')
        cards[card2].setAttribute('src', 'images/memory-game-blank.png')
    }
    cardsChosen= []
    cardsChosenIds= []
    displayScore.textContent = correctPairs.length

    if(correctPairs.length === cardArray.length / 2){
        displayYouWin.textContent = 'YOU WIN'
    }
}

createBoard()

