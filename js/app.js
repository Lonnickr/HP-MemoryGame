console.log("Harry Potter memory card game!")

const section = document.querySelector("section");
const attempts = document.querySelector("attempt");
const matches = document.querySelector("match")
const timer = document.querySelector("#timer");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const gameContainer = document.querySelector("game-container");
const result = document.getElementById("result");
const controls = document.querySelector("controls-container");

let cards;
let interval;
let firstCard = false;
let seconDcard = false;
// let timer = null;
let timeLeft;
function startTimer() {
    let timer;
    let timeRemaining = 60;
clearInterval(timer);
 timer = setInterval(function() {
      timeRemaining--;
document.getElementById('timer').innerText = `Time Remaining: ${timeRemaining} seconds`;
    if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
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
    const cardData = getData ();
    cardData.sort(() => Math.random() - 0.5);
    return cardData; 
}

const cardGenerator = () => {
    const cardData = randomize();
    const cards = document.querySelectorAll(".card")
cardData.forEach( item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

face.src = item.image;
card.setAttribute("name", item.name)
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
    })
  });   
};


const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped'); 
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
    } else {
       console.log("wrong");
       flippedCards.forEach(card => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000)
       })
    };
}
};
cardGenerator();

startButton.addEventListener("click", () => {
    controls.classList.romove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    startTimer()
});


stopButton.addEventListener( "click", (stopGame = () => {
            controls.classList.romove("hide");
            stopButton.classList.add("hide");
            startButton.classList.remove("hide");
            clearInterval(interval)

    const initializer = () => {
                result.innerText = "";
                winCount = 0;
                let cardValues = generateRandom();
                console.log(cardValues);
                cardGenerator(cardValues);
                initializer ();
            };
        })
    )  


       


 