
//Random image for player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomSourceImage = "images/dice" + randomNumber1 + ".png";//dice1 - dice6

document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage); // images/dice1.png - images/dice6.png


// Random image for player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}


console.log(randomSourceImage2);
