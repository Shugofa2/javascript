//step 6. Array for background color
const bgColors = ["#9FE2BF",
                  "#40E0D0", 
                  "#D7BDE2", 
                  "#85929E", 
                  "#F9E79F", 
                  "#73C6B6", 
                  "#F9E79F",
                  "#C0392B",
                  "#F4D03F",
                  "#F4ECF7 "];
//step 7 Array for meals
const meals = [
  { name: 'pizza', src: 'pizza.jpg', price: 3},
  { name: 'pasta', src: 'pasta.jpg', price: 5},
  { name: 'Sushi', src: 'sushi.jpg', price: 9},
  { name: 'Burger', src: 'burger.jpg', price: 8},
  { name: "Salad", src: "salad.jpg", price: 6 }
];

//step 8 wallet amount
let wallet = 100;

//step 9. declare generateRandomNumber function
function generateRandomNumber(max) {
  console.log("Running generateRandomNumber function");
  const randomFinalNum = Math.floor(Math.random() * max);
    console.log(randomFinalNum);
    return randomFinalNum;
}

//step 10. declare generateBackgroundColor function
function generateBackgroundColor(none) {
  console.log( "Running generateBackgroundColor function");
  const randomIndex = generateRandomNumber(bgColors.length);
  const randomColor = bgColors[randomIndex];
  document.body.style.backgroundColor = randomColor;
  return none;
}
//step 11. call generateBackgroundColor function to see the changes
generateBackgroundColor();
 