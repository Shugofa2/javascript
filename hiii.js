// Write all JS here. Do not write any JS in index.html

// Array of background colors
let bgColors = ["#273746", "#7DCEA0", "#F5CBA7", "#717D7E", "#D4AC0D", "#D7BDE2", "#A93226 ", "#A9CCE3", "#A3E4D7", "#154360", "#873600", "#A9DFBF" ]; 

//Array for meals
let meals =
[
{ name: "Ramen", src: "ramen.jpg", price: 3 }, { name: "Chicken", src: "chicken.jpg", price: 5 }, { name: "Pierogi", src: "Pierogi.jpg", price: 8 }, { name: "Moussaka", src: "Moussaka.jpg", price: 6 }, { name: "sandwich", src: "sandwich.avif", price: 9 },
{ name: "Ashak", src: ".jpg", price: 23 }, { name: "Fruit Cake", src: "kabab.jpeg", price: 12 }, { name: "fries", src: "fries.jpg", price: 36 },
{ name: "Manto", src: "mantu.jpg", price: 19 }];

//Wallet price
let wallet = 100;

//declare generateRandomNumber function
function generateRandomNumber(max) {
  console.log("Running generateRandomNumber function");
  const randomFinalNum = Math.floor(Math.random() * max);
    console.log(randomFinalNum);
    return randomFinalNum;
}

//declare function of generateBackgroundColor 
function generateBackgroundColor() {
console.log( "Running generateBackgroundColor function");
console.log("Running generateBackgroundColor function");
const random = generateRandomNumber(bgColors.length);
const randomColor = bgColors[random];
document.body.style.backgroundColor = randomColor;
}

 // call meals and backgroundcolor function
generateBackgroundColor();
generateMeals();

function generateMeals() {
  console.log( "Running generateMeals function");
  let meal1Box = generateRandomNumber(meals.length);
    let meal2Box  = generateRandomNumber(meals.length);
    let meal3Box  = generateRandomNumber(meals.length);
  
    let meal1 = meals[meal1Box ];
    let meal2 = meals[meal2Box ];
    let meal3 = meals[meal3Box ];
  
    document.querySelector("#meal1 img").src = meal1.src;
    document.querySelector(".card-body .card-title").textContent = meal1.name;
    document.querySelector(".card-body .price").textContent = meal1.price;
    document.querySelector("#meal2 img").src = meal2.src;
    document.querySelector("#meal2 .card-title").textContent = meal2.name;
    document.querySelector("#meal2 .price").textContent = meal2.price;
    document.querySelector("#meal3 img").src = meal3.src;
    document.querySelector("#meal3 .card-title").textContent = meal3.name;
    document.querySelector("#meal3 .price").textContent = meal3.price;
    calculateBill();
}
//calculate function
function calculateBill() {
  console.log( "Running calculateBill function");
  const meal1Price = parseInt(document.querySelector("#meal1 .price").textContent);
    const meal2Price = parseInt(document.querySelector("#meal2 .price").textContent);
    const meal3Price = parseInt(document.querySelector("#meal3 .price").textContent);
    const total = meal1Price + meal2Price + meal3Price;
    document.querySelector("#total").textContent = total;
}
// "Generate Meals" button
document.querySelector("#generate-button").onclick = function(){
  generateMeals();
}


// Function of purchase button
function purchase(total) {
  console.log("Running purchase function");                        
  if (wallet >= total) {
    wallet -= total;
    document.querySelector("#wallet").textContent = wallet;
    document.querySelector("#message").classList.remove("invisible");
    generateMeals();
    generateBackgroundColor();
    document.querySelector("#purchase-cost").textContent = parseInt(total);
  } else {
    alert("Sorry, you cannot purchase the meals!");
    document.querySelector("#message").classList.add("invisible");
  }
}
function addFunds(funds) {
  console.log("Running purchase function");
}

 //Purchase All Meals button
 document.querySelector("#purchase-button").onclick = function() {
  let total = parseInt(document.querySelector("#total").textContent);
  purchase(total);
};

// Function of add funds to the wallet
function addFunds(funds) {
  console.log("Running addFunds function");
  wallet += funds;
  console.log(wallet);
  document.querySelector("#wallet").textContent = wallet;
}

  //"Add Funds to Wallet" button
  document.querySelector("#add-funds-button").onclick = function() {
    let funds = parseInt(prompt("How much funds would you like to put in?"));
    addFunds(funds);
  };
