const bgColors = [
    "#FF5733",
    "#F08080",
    "#FA8072",
    "#E9967A",
    "#FFA07A",
    "#CD5C5C",
    "#FFC0CB",
    "#FFB6C1",
    "#FF69B4",
    "#FF1493"
  ];
  const bgColors = [
    '#7DCEA0',
    '#EBDEF0',
    "#85929E", 
    "#F9E79F", 
    "#73C6B6", 
    "#F9E79F",
    "#C0392B",
    "#F4D03F",
    "#F4ECF7 "
  ];
  // Array of meals
  const meals = [
    { name: "Pizza", src: "pizza.jpeg", price: 10 },
    { name: "Burger", src: "burger.jpeg", price: 8 },
    { name: "Pasta", src: "pasta.jpeg", price: 12 },
    { name: "Salad", src: "salad.jpeg", price: 6 },
    { name: "Sushi", src: "sushi.jpeg", price: 15 },
    { name: "Steak", src: "steak.jpeg", price: 20 }
  ];
  
  // Starting wallet amount
  let wallet = 100;
  // name
  let price = document.querySelector(".price");
  let name = document.querySelector(".card-title")

  // Function to generate a random number
  function generateRandomNumber(max) {
    console.log("Running generateRandomNumber function");
    const randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    return randomNum;
  }
  
  // Function to generate a random background color
  function generateBackgroundColor() {
    console.log("Running generateBackgroundColor function");
    const randomIndex = generateRandomNumber(bgColors.length);
    const randomColor = bgColors[randomIndex];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Function to generate random meals
  function generateMeals() {
    console.log("Running generateMeals function");
    const meal1Index = generateRandomNumber(meals.length);
    const meal2Index = generateRandomNumber(meals.length);
    const meal3Index = generateRandomNumber(meals.length);
  
    const meal1 = meals[meal1Index];
    const meal2 = meals[meal2Index];
    const meal3 = meals[meal3Index];
  
    document.querySelector("#meal1 img").src = meal1.src;
    document.querySelector("#meal1 .meal-name").textContent = meal1.name;
    document.querySelector("#meal1 .meal-price").textContent = meal1.price;
  
    document.querySelector("#meal2 img").src = meal2.src;
    document.querySelector("#meal2 .meal-name").textContent = meal2.name;
    document.querySelector("#meal2 .meal-price").textContent = meal2.price;
  
    document.querySelector("#meal3 img").src = meal3.src;
    document.querySelector("#meal3 .meal-name").textContent = meal3.name;
    document.querySelector("#meal3 .meal-price").textContent = meal3.price;
  
    calculateBill();
  }
  
  // Function to calculate the total bill
  function calculateBill() {
    console.log("Running calculateBill function");
    const meal1Price = parseInt(document.querySelector("#meal1 .meal-price").textContent);
    const meal2Price = parseInt(document.querySelector("#meal2 .meal-price").textContent);
    const meal3Price = parseInt(document.querySelector("#meal3 .meal-price").textContent);
    const total = meal1Price + meal2Price + meal3Price;
    document.querySelector("#total").textContent = total;
  }
  
  // Event listener for "Generate Meals" button
  document.querySelector("#generate-btn").addEventListener("click", generateMeals);
  
  // Function to handle the purchase
  function purchase(total) {
    console.log("Running purchase function");
    if (wallet >= total) {
      wallet -= total;
      document.querySelector("#wallet-amount").textContent = wallet;
      document.querySelector("#success-message").classList.remove("invisible");
      generateMeals();
      generateBackgroundColor();
    } else {
      alert("Sorry, you cannot purchase the meals!");
      document.querySelector("#message").classList.add("invisible");
    }
  }
  
  // Event listener for "Purchase All Meals" button
  document.querySelector("#purchase-btn").addEventListener("click", function() {
    const total = parseInt(document.querySelector("#total").textContent);
    purchase(total);
  });
  
  // Function to add funds to the wallet
  function addFunds(funds) {
    console.log("Running addFunds function");
    wallet += funds;
    console.log(wallet);
    document.querySelector("#wallet-amount").textContent = wallet;
  }
  
  // Event listener for "Add Funds to Wallet" button
  document.querySelector("#add-funds-btn").addEventListener("click", function() {
    const funds = parseInt(prompt("How much funds would you like to put in?"));
    addFunds(funds);
  });
  
  // Initial generation of meals and background color
  generateMeals();
  generateBackgroundColor();
