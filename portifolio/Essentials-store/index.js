//////////////////////////////////
// Welcome to the shop script//
///////////////////////////////////
// here is how it works.
// 1. Adds item to the cartitem array
// 2. displays the cartitem array to the webpage.
// 3. counts the amount of times you clicked each item.
// 4. adds a discount if you have pressed the discount button, disables discount if it is already added
// 5. a checkout function displays the total price including discounts you have to pay, and
// displays it as a window message, then resets everything to prepare for the next purchase.
// 6. has a clock which is working seperately from the rest of the code, and updated every 1000ms
// most functions have global scope and there are many global variables, which might not be desireable
// for a larger project, and does not follow the OOP principles.

// Call displayTime() function to show the current time on the webpage;
// loaded first so it doesn't look weird on page load.
displayTime();
// Define variables;

//Sets cartitems to an empty array using the let keyword, I chose to use let over var in case
// I needed to change the variable later, but I don't think it makes much difference.
let cartItems = [];
// Sets totalPrice to zero using =
let totalPrice = 0;
// Sets discountApplied to false using =
let discountApplied = false;

////////////////////////////////////////////////////////////////
// Function to construct items based on productName parameter
///////////////////////////////////////////////////////////////////
// object constructor from page 117 task (1 a, b and c)
// Define a class called Item that will act as an object constructor for each item.
// this is made so it would be easy for me to add additional properties and list items

class Item {
  constructor(productName) {
  // Check if the product selected has the name 'banana' and set the name to Banana and price to 0.50
    if (productName === 'banana') {
      this.name = 'Banana';
      this.price = 0.50;
    } else if (productName === 'potato') {
      this.name = 'Potato';
      this.price = 1.00;
    } else if (productName === 'bread') {
      this.name = 'Bread';
      this.price = 2.00;
    } else if (productName === 'wagyu-beef') {
      this.name = 'Wagyu-beef';
      this.price = 3000.00;
    } else if (productName === 'stinger-missile') {
      this.name = 'Stinger-missile';
      this.price = 197884.00;
    } else if (productName === 'toothpick') {
      this.name = 'Toothpick';
      this.price = 0.10;
      // just to create an object with a complex property
      this.quality = ['wood', 'premium', 'amazing'];
    }
  }
}

// Create an empty array to store the selected items
let cart = [];

// Define a function that takes productName as an argument
function addToCart(productName) {
  // Create a new object instance of Item class with productName as an argument
  let item = new Item(productName);

  // Push the item object to the cart array
  cart.push(item);



// empties checkout message when new items are added.
let message = '';
// one of the many times the document method is used (page 126)
document.getElementById('checkout-message').innerHTML = message;

//adds item to the cartitem array
cartItems.push(item);
totalPrice += item.price;
updateCart();
}
///////////////////////////////////////////////
// Updates the cart displayed on the webpage.
/////////////////////////////////////////////////
function updateCart() {
  // Get the element with id 'cart-items' and clear its content
let cartList = document.getElementById('cart-items');
cartList.innerHTML = '';
  // Initialize an object to store the counts of each item in the cart
let itemCounts = {};
// Loop through the cartItems array and increment the count for each item name
for (let i = 0; i < cartItems.length; i++) {
let itemName = cartItems[i].name;
if (itemCounts[itemName] === undefined) {
  // If the item name is not in the object yet, set its count to 1
itemCounts[itemName] = 1;
} else {
  // If the item name is already in the object, increase its count by 1
itemCounts[itemName]++;
}
}
// Loop through the itemCounts object and create a div element for each item name and count
for (let itemName in itemCounts) {
let itemCount = itemCounts[itemName];
// Create a new div element
let itemDiv = document.createElement('div');
// Find the price of the item from the cartItems array using the find method
let itemPrice = cartItems.find(item => item.name === itemName).price;
// This line calculates the discounted price of the item based on the discountApplied variable
// If discountApplied is true, then the item price is multiplied by 0.8 (20% off)
// If discountApplied is false, then the item price remains unchanged
// The ternary operator (?) is a shorthand way of writing an if-else statement
let itemDiscountedPrice = discountApplied ? (itemPrice * 0.8) : itemPrice;

// This line sets the innerHTML of the itemDiv element to show the item name, count and total price
// The + operator adds strings together
// The toFixed(2) method rounds a number to two decimal places (toFixed() method page 132 to do task d)
itemDiv.innerHTML = itemName + ' x ' + itemCount + ' - $' + (itemCount * itemDiscountedPrice).toFixed(2);
// This line appends the itemDiv element to the cartList element as a child node
cartList.appendChild(itemDiv);
}
// This line calculates the total discounted price of all items in the cart based on the discountApplied variable
let totalDiscountedPrice = discountApplied ? totalPrice * 0.8 : totalPrice;
// This line sets the innerHTML of the element with id 'total-price' to show the total price of all items in the cart
document.getElementById('total-price').innerHTML = `Total price is ` + totalDiscountedPrice.toFixed(2) + `$`;
}
// Call updateCart() function on page load to display any items already in the cart
updateCart();

//////////////////////////////////////////////////////////////////////////////
// This function handles checkout process when user clicks on checkout button
///////////////////////////////////////////////////////////////////////////////
function checkout() {
// Check if there are any items in the cart array using its length property
if (cartItems.length > 0) {
  // Creates an empty message string
let message = '';
// Calculate total discounted price using same logic as before
let totalDiscountedPrice = discountApplied ? totalPrice * 0.8 : totalPrice;
// Display an alert window with a thank you message and total cost using window.alert method 
// uses the window alert in duckett page 124 (also task 2. built-in objects a)
// also to do task c)
message = window.alert(('Thank you for your purchase! Total cost: $').toUpperCase() + totalDiscountedPrice.toFixed(2));
// Reset cartItems array to empty using []
cartItems = [];
// Resets totalPrice to zero
totalPrice = 0;
// Resets discountApplied to false
discountApplied = false;
//// This line enables the discount button by setting its disabled property to false
// using document.querySelector method and dot notation
document.querySelector(".btn__discount").disabled = false;
// function to update the cart again
updateCart();
} else {
  // If there are no items in the cart array, then display a message saying 'Your cart is empty!'
  // also has built-in objects B)
let message = 'Your cart is empty!';
// Set the innerHTML of the element with id 'checkout-message' to the message string
document.getElementById('checkout-message').innerHTML = message;
}
}

////////////////////////////////////////////////////////////////////////////////
// This function applies a 20% discount to all items in the cart when user clicks on discount button
//////////////////////////////////////////////////////////////////////////////////////
function addDiscount() {
  // Check if discountApplied is false using ! in an if statement. 
  if (!discountApplied) {
    // Set discountApplied to true
    discountApplied = true;
    // Call updateCart() function again to recalculate and display discounted prices
    updateCart();
 // Disable the discount button by setting its disabled property to true using document.querySelector method and dot notation
    document.querySelector(".btn__discount").disabled = true;
  }
}

/////////////////////////////////////////////////////////////////
// This function displays the current time on the webpage
/////////////////////////////////////////////////////////////

// Creating an instance of the date object (page 136 - 139) to do task e
function displayTime() {
   // Create a new Date object and store it in a variable called currentTime using var keyword
  var currentTime = new Date();
   // Get the hours and minutes from the currentTime object using getHours() and getMinutes() methods
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

 // Add leading zeroes if needed using if statements and < operator
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
// This line adds together the hours and minutes with a colon (:) in between
// and stores it in a variable called timeString using var keyword
  var timeString = hours + ":" + minutes;
  // This line sets the innerHTML of the element with id 'date_time' 
  //to show the current time using template literals (`) and + operator
  document.getElementById("date_time").innerHTML = `the time is ` + timeString;
}
// This line calls displayTime() function every 1000 milliseconds (1 second) using setInterval method
setInterval(displayTime, 1000);

// Call updateCart() function on page load
updateCart();