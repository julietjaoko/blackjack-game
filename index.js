let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let cards = [];
let firstCard;
let secondCard;
let sum;
let isAlive = true;
let hasBlackjack = false;

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("newBtn").addEventListener("click", newCard);

function getCard() {
    let card = Math.floor(Math.random() * 13) + 1;

    if(card === 1) {
        return 11;
    } else if (card > 9) {
        return 10;
    } else {
        return card;
    }
}

function startGame() {
    console.log("Game started!");
    isAlive = true;
    firstCard = getCard();
    secondCard = getCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if(sum < 21) {
        message = "Draw another card";
    } else if(sum === 21) {
        message = "Congratulations! You have blackjack.";
        hasBlackjack = true;
    } else {
        message = "You have lost the game";
        isAlive = false;
    }

    messageEl.textContent = message;

    cardsEl.textContent = "Cards: ";
    for (let card of cards) {
        cardsEl.textContent += (card + " ");
    }
    
    sumEl.textContent = "Sum: ";
    sumEl.textContent += sum;
}

function newCard() {
    if (hasBlackjack == false && isAlive == true) {
        console.log("New card!");
        let card = getCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}