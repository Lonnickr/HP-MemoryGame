console.log("Harry Potter memory card game!")

const section = document.querySelector("section");
const moves = document.getElementById("moves-count");
const timevalue = document.getElementById("time");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
const gameContainer = document.querySelector("game-container");
const result = document.getElementById("result");
const controls = document.querySelector("controls-container");

let cards;
let interval;
let firstCard = false;
let seconDcard = false;

const getItems = () => [
    { name: "fawkes1", image: "../images/fawkes\ 1.jpeg"},
    { name: "fawkes2", image: "../images/fawkes\ 2.jpeg" },
    { name: "gryffindor", image: "../images/gryffindor.jpeg" },
    { name: "hufflepuff", image: "../images/hufflepuff.jpeg" },
    { name: "ravenclaw", image: "../images/ravenclaw.jpeg" },
    { name: "slytherin", image: "../images/slytherin.jpeg" }
]

const randomize = () => {
    const items = getItems ();
    items.sort(() => Math.random() - 0.5);
    return items; 
}

const cardGenerator = () => {
    const items = randomize();
    items.forEach((items)=> {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
face.src = items.image;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    });   
};
cardGenerator()