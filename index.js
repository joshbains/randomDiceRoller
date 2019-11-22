//Assigns random number and selects first dice's random roll
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


//Assigns random number and selects second dice's random roll
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// Conditional check on who wins the game

if (randomNumber1 > randomNumber2) {
  var h1 = document.querySelector("h1");
  h1.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  var h1 = document.querySelector("h1");
  h1.innerHTML = "Player 2 Wins!";
} else {
  var h1 = document.querySelector("h1");
  h1.innerHTML = "Draw!";
}
