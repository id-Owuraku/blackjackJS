let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""

let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEL = document.getElementById("message-el")

let player = {
    name: "Kuks",
    chips: 14
}

let playerEL =document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber == 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
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
    cardEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
        isAlive = false
    } 

    messageEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}