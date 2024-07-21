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
    { name: "fawkes1", image: "fawkes1.jpeg" },
    { name: "fawkes2", image: "fawkes2.jpeg" },
    { name: "gryffindor", image: "gryffindor.jpeg" },
    { name: "hufflepuff", image: "hufflepuff.jpeg" },
    { name: "ravenclaw", image: "ravenclaw.jpeg" },
    { name: "slytherin", image: "slytherin.jpeg" }
]

const randomize = () => {
    const items = getItems ();
    console.log(items);
}
randomize ();