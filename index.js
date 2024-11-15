// alert("working");
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var photo1 = document.querySelector(".img1");
var photo2 = document.querySelector(".img2");

var text = document.querySelector("h1");
// photo1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

if(randomNumber1 > randomNumber2){
    text.textContent = "🎉🎉 player 1 won";
}
else if(randomNumber2 > randomNumber1){
    text.textContent = "player 2 won 🎉🎉";
}
else{
    text.textContent = "it's a tie! refresh";
}

photo1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
photo2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
