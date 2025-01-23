document.addEventListener("DOMContentLoaded", function () {});
let colours = [
  "red",
  "green",
  "blue",
  "purple",
  "yellow",
  "orange",
  "pink",
  "brown",
];

const coloursemoji = {
  red: "🔴",
  green: "🟢",
  blue: "🔵",
  purple: "🟣",
  yellow: "🟡",
  orange: "🟠",
  pink: "🌸",
  brown: "🟤",
};

let newcolour1;
let newcolour2;
let newcolour3;
let newcolour4;
let colourToGuess = [];
let Correctcolour = 0;
let CorrectPosition = 0;
let verification = [];
let goodcolour = 0;
let life = 12;
let emojishow = "";
let emojishow2 = "";
const input = document.querySelector("input");
const validate = document.querySelector("#valider");
const hints = document.querySelector("#Hints");
const text = document.getElementById("answer");
const texttries = document.getElementById("tries");
const texthint = document.getElementById("hint");

validate.addEventListener("click", () => {
  life--;
  texttries.innerHTML = "Number of tries left:[ " + life + " ]";
  console.log(life);
  emojishow2 = "";
  for (let i = 0; i < colourToGuess.length; i++) {
    emojishow2 += coloursemoji[colourToGuess[i]];
  }

  showcolors();
  let UserAnswer = input.value.split(",");
  console.log(UserAnswer);
  checkGoodColours(UserAnswer);

  if (verification.length > 2) {
    verification = [];
  }
  if (life == 0) {
    text.innerHTML =
      "You used all your 12 tries, the correct answer was:" + emojishow2;
    life += 12;
  }
});

hints.addEventListener("click", () => {
  let k = 0;
  texthint.innerHTML += coloursemoji[colourToGuess[k]];
});

function colourRandom() {
  const randomcolour = Math.floor(Math.random() * colours.length);
  return colours[randomcolour];
}

newcolour1 = colourRandom();
newcolour2 = colourRandom();
newcolour3 = colourRandom();
newcolour4 = colourRandom();

function getColourList() {
  colourToGuess.push(newcolour1);
  colourToGuess.push(newcolour2);
  colourToGuess.push(newcolour3);
  colourToGuess.push(newcolour4);

  console.log(colourToGuess);
  return colourToGuess;
}

getColourList();

console.log(colourToGuess);

function checkGoodColours(Guess) {
  for (let i = 0; i < colourToGuess.length; i++) {
    if (colourToGuess[i] == Guess[i]) {
      CorrectPosition += 1;
      goodcolour += -1;
    }

    if (colourToGuess.includes(Guess[i])) {
      goodcolour += 1;
    }
  }

  if (CorrectPosition == colourToGuess.length) {
    goodcolour = 0;
    verification.push(CorrectPosition);
    verification.push(goodcolour);
    console.log(verification);
    console.log("Bravo!!");
    text.innerHTML = "Your Guess is correct!!! [" + verification + "]";
    return;
  }
  verification.push(CorrectPosition);
  verification.push(goodcolour);
  console.log(verification);
  text.innerHTML = "Your Guess is: [" + verification + "]";

  if (verification.length > 1) {
    (verification = []), (goodcolour = 0);
    CorrectPosition = 0;
  }
}

function showcolors() {
  let emojishow = "";
  for (let i = 0; i < colourToGuess.length; i++) {
    emojishow += coloursemoji[colourToGuess[i]];
  }
  console.log(emojishow);
}
