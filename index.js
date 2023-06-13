


var randomNumber1 = Math.floor(Math.random()*6);
 randomNumber = randomNumber1+1;


 var diceImage = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");

 var randomNumber2 = Math.floor(Math.random()*6);
 randomNumber2 = randomNumber2+1;

 var diceImage2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
//  diceImage.setAttribute("src", "images/dice" + randomNumber + ".png");
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";

    }
else {
    document.querySelector("h1").innerHTML="Draw!!!";
}