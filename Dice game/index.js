var randomnumber1 = Math.floor(Math.random()*6);
randomnumber1++;

var randomimage = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage);

var randomnumber2 = Math.floor(Math.random()*6);
randomnumber2++;

var randomimage1 = "images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage1);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}