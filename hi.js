let car = document.getElementById("car");
let price = document.getElementById("price");
let myH1 = document.getElementById("myH1");
let submitBtn = document.getElementById("submitBtn");
let wallet = document.getElementById("wallet");
price = 22;

submitBtn.onclick = function() {
  
        document.querySelector("#text").textContent = "You buy this!";
    
}
var randomColor = Math.floor(Math.random() * 
16777215).toString(16);

document.body.style.background = "#" + randomColor;