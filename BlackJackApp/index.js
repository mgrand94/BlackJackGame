let player = {
    name: "Marco",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message  = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
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
    cardsEl.textContent = "Cards: "

    //loops through array and renders cards to screen
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "Congrats, you hit BlackJack!"
        hasBlackJack = true
    } else {
        message = "You went over 21...You lose!"
        isAlive = false
    }

    messageEl.textContent = message
}

function hit() {
    if (isAlive === true && hasBlackJack === false) {
        let hitCard = getRandomCard()
        sum += hitCard
        cards.push(hitCard)
        console.log(cards)
    
        renderGame()
    }
  
}



//TODO: 1.Create betting option...How much to bet and win lose addition or subtraction 
//      2. User can currently hit start button as many times as desired to get new cards...fix that.
//      3. App needs user input...currently hard coded name and chip count...lets let user enter dynamic name and chips. 
