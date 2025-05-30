import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = [
  {name: "Corazones", symbol: "♥", color: "red"},
  {name: "Diamantes", symbol: "♦", color: "red"},
  {name: "Tréboles", symbol: "♣", color: "black"},
  {name: "Picas", symbol: "♠", color: "black"},
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

const suit = suits[randomIndex(suits.length)];
const value = values[randomIndex(values.length)];

const topLeft = document.getElementById("top-left");
const center = document.getElementById("center");
const bottomRight = document.getElementById("bottom-right");
const card = document.getElementById("card");

topLeft.textContent = value + suit.symbol;
bottomRight.textContent = value + suit.symbol;
center.textContent = suit.symbol;

if(suit.color === "red") {
  card.classList.add("red");
} else {
  card.classList.remove("red");
}

};
