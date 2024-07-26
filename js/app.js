console.log("Harry Potter memory card game!")

const section = document.querySelector("section");
const attemptsEl = document.querySelector("#attempts");
const matchesEl = document.querySelector("#matches")
const timer = document.querySelector("#timer");
const restartButton = document.getElementById("restart");
const startButton = document.getElementById("start");
const gameContainer = document.querySelector("game-container");
const result = document.getElementById("result");
const controls = document.querySelector("controls-container");
const winnerSound = new Audio("../sounds/win1.wav")
const flipCardSound = new Audio("../sounds/turnpage.wav")
const loserSound = new Audio("../sounds/loser.mp3")



let cards;
let gameStarted = false;
let interval;
let matchCounter = 0
let attemptCounter = 0
let firstCard = false;
let secondCard = false;
let time = null;
let timeLeft;

function confettiDelay() {
    confetti.start(3000)
}

const getData = () => [
    { name: "dumbledore", image: "./images/Dumbledore.jpeg" },
    { name: "hp&v", image: "./images/backofcard2.jpeg" },
    { name: "book", image: "./images/backofcard.jpeg" },
    { name: "fawkes2", image: "./images/fawkes\ 2.jpeg" },
    { name: "gryffindor", image: "./images/gryffindor.jpeg" },
    { name: "hufflepuff", image: "./images/hufflepuff.jpeg" },
    { name: "ravenclaw", image: "./images/ravenclaw.jpeg" },
    { name: "slytherin", image: "./images/slytherin.jpeg" },
    { name: "book", image: "./images/backofcard.jpeg" },
    { name: "fawkes2", image: "./images/fawkes\ 2.jpeg" },
    { name: "gryffindor", image: "./images/gryffindor.jpeg" },
    { name: "hufflepuff", image: "./images/hufflepuff.jpeg" },
    { name: "ravenclaw", image: "./images/ravenclaw.jpeg" },
    { name: "slytherin", image: "./images/slytherin.jpeg" },
    { name: "hp&v", image: "./images/backofcard2.jpeg" },
    { name: "dumbledore", image: "./images/Dumbledore.jpeg" }
]


const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        
        face.src = item.image;
        card.setAttribute("name", item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        
        card.addEventListener('click', (e) => {
            if(gameStarted) {
                card.classList.toggle("toggleCard");
                checkCards(e);
            }
        });
    });
};

const startTimer = () => {
    timeLeft = 50;
    timer.innerText = `Time Remaining: ${timeLeft} seconds`;
    clearInterval(interval);
    interval = setInterval(() => {
        timeLeft--;
        timer.innerText = `Time Remaining: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            result.innerText = "You Lose!";
            loserSound.play()
            gameStarted = false;
        }
    }, 1000);
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped'); 
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flipCardSound.play()
            matchCounter++;
            matchesEl.textContent = `Matches: ${matchCounter}`;
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
                });
            if (matchCounter === getData().length / 2) {
                clearInterval(interval);
                result.innerText = "You Win!";
                gameStarted = false;
                winnerSound.play()
                setTimeout(confettiDelay, 2000)
            }
        } else {
            attemptCounter++;
            attemptsEl.textContent = `Attempts: ${attemptCounter}`;
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
        }
    }
};

const resetGame = () => {
    clearInterval(interval);
    attemptCounter = 0;
    matchCounter = 0;
    attemptsEl.innerText = `Attempts: ${attemptCounter}`;
    matchesEl.innerText = `Matches: ${matchCounter}`;
    timer.innerText = `Time Remaining: 60 seconds`;
    result.innerText = "";
    gameStarted = false;
    section.innerHTML = "";
    cardGenerator();
};

startButton.addEventListener("click", () => {
    startTimer();
    gameStarted = true;
});

restartButton.addEventListener("click", resetGame);

cardGenerator();

var modal = document.getElementById("instructionsModal");
var btn = document.getElementById("instructionsBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 


 