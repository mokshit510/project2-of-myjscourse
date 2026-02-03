let player={
    name: "mok",
    chips: 1000
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.innerText = player.name+": "+player.chips
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber > 10 ? 10 : randomNumber === 1 ? 11 : randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    message = sum <= 20 ? "Do you want to draw a new card?" : sum === 21 ? ("You've got Blackjack!", hasBlackJack = true) : ("You're out of the game!", isAlive = false)
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}