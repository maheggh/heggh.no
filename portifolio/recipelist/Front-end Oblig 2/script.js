// Task 2 a: Adding items to your list;

/**
 * An array of recipes (array of objects), each containing the recipe name, ingredients, and preparation instructions.
 * @type {Array<{name: string, ingredients: string, preparation: string}>}
 */

//Duckett book page 376, array of objects
const recipes = [
  {
    name: 'Pancakes',
    ingredients: `<div class="recipes"><ul>
    <li>1 cup all-purpose flour;</li>
    <li>2 tablespoons white sugar</li>
    <li>2 teaspoons baking powder</li>
    <li>1 teaspoon salt, or to taste</li>
    <li>1 cup milk</li>
    <li>2 tablespoons vegetable oil</li>
    <li>1 egg, beaten</li></ul>`,
    preparation: `Step 1:Combine flour, sugar, baking powder, and salt in a large bowl. 
    Make a well in the center, and pour in milk, oil, and egg. Mix until smooth.

    Heat a lightly oiled griddle or frying pan over medium-high heat. 
    Pour or scoop batter onto the griddle, 
    using approximately 1/4 cup for each pancake; 
    cook until bubbles form and the edges are dry, 1 to 2 minutes. 
    Flip and cook until browned on the other side. 
    Repeat with remaining batter. </div>`
  },
  {
    name: 'Waffles',
    ingredients: `<div class="recipes"><ul>
    <li>2 cups all-purpose flour</li>
    <li>2 tablespoons granulated sugar</li>
    <li>2 teaspoons baking powder</li>
    <li>1/2 teaspoon salt</li>
    <li>2 large eggs</li>
    <li>1 3/4 cups milk</li>
    <li>1/2 cup vegetable oil or melted butter</li>
    <li>1 teaspoon vanilla extract</li></ul>`,
    preparation: `Preheat your waffle iron according to the manufacturer's instructions.
    In a large mixing bowl, whisk together the flour, sugar, baking powder, and salt.
    In a separate medium-sized mixing bowl, beat the eggs. 
    Add the milk, vegetable oil (or melted butter), and vanilla extract. Stir to combine.
    Pour the wet ingredients into the dry ingredients and mix until just combined. It's okay if the batter is a bit lumpy; overmixing can result in tough waffles.
    Lightly grease the waffle iron with cooking spray or brush with a little oil.
    Pour the recommended amount of batter onto the hot waffle iron (usually about 1/4 to 1/2 cup, depending on the size of your iron). Close the lid and cook until the waffle is golden brown and crisp. Cooking time may vary, so follow the manufacturer's instructions or check the waffle after about 3-4 minutes.
    Carefully remove the waffle from the iron using a fork or tongs. Place it on a wire rack or plate.
    Repeat steps 5-7 with the remaining batter.
    Serve your waffles warm, topped with butter, 
    maple syrup, whipped cream, fruit, or any other toppings you enjoy!</div>`
  },
  {
    name: 'Donuts',
    ingredients: `<div class="recipes"><ul><li>2 1/4 teaspoons active dry yeast (1 standard packet)</li>
    <li>2 large eggs, room temperature</li>
    <li>1/2 cup granulated sugar</li>
    <li>1/2 teaspoon salt</li>
    <li>1/4 cup unsalted butter, melted and cooled</li>
    <li>4 1/2 cups all-purpose flour, plus more for dusting</li>
    <li>Vegetable oil, for frying</li>
    <li>For the glaze:</li>
    
    <li>2 cups powdered sugar</li>
    <li>1/4 cup milk</li>
    <li>1 teaspoon vanilla extract</li></ul>`,
    preparation: `In a small bowl or measuring cup, combine the warm milk and active dry yeast. 
    Let it sit for about 5 minutes until it becomes frothy.
    In a large mixing bowl or the bowl of a stand mixer, beat the eggs, sugar, salt, and melted butter together. Add the frothy yeast mixture and stir to combine.
    Gradually add the flour to the wet ingredients, mixing until a soft dough forms. 
    If using a stand mixer, use the dough hook attachment to knead the dough for about 5 minutes. 
    If mixing by hand, turn the dough out onto a lightly floured surface and knead for 8-10 minutes until the dough is smooth and elastic.
    Place the dough in a greased bowl, cover with a clean cloth or plastic wrap, 
    and let it rise in a warm place for about 1-2 hours, or until doubled in size.
    Once the dough has risen, gently punch it down and turn it out onto a lightly floured surface. 
    Roll the dough out to about 1/2-inch thickness.
    Use a donut cutter or two round cookie cutters (one larger and one smaller) to cut out the donuts and donut holes. 
    Place the cut donuts and holes onto a parchment-lined baking sheet.
    Cover the donuts with a clean cloth and let them rise again for about 30-45 minutes, or until slightly puffed up.
    In a deep, heavy-bottomed pot, heat about 2 inches of vegetable oil to 350°F (175°C). 
    Carefully lower the donuts, a few at a time, into the hot oil. Fry for 1-2 minutes per side, or until golden brown. 
    Use a slotted spoon or spider to remove the donuts from the oil and transfer them to a paper towel-lined plate or wire rack to drain.
    Once all the donuts and holes are fried, let them cool slightly before glazing.
    To make the glaze, whisk together the powdered sugar, milk, and vanilla extract in a shallow bowl until smooth.
    Dip the slightly cooled donuts into the glaze, allowing the excess to drip off. Place the glazed donuts on a wire rack or plate to set.</div>`
  },
];

/**
 * Creates a recipe list item element with the recipe name and a delete button.
 * @param {{name: string, ingredients: string, preparation: string}} recipe - The recipe object.
 * @returns {HTML LI Element} The list item element representing the recipe.
 */

const recipeList = document.querySelector('#list');
const recipeDetails = document.querySelector('#recipeDetails');

function createRecipeElement(recipe) {
  // Create list item, div and button elements.
  const listItem = document.createElement('li');
  const recipeDiv = document.createElement('div');
  const deleteButton = document.createElement('button');

  // Sets the content of the div and button elements.
  recipeDiv.textContent = recipe.name;
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('type', 'button');

  // Append the div and button elements to the list item.
  listItem.append(recipeDiv, deleteButton);



  // Task 2 b: Use the addEventListener() method to handle the click event
  recipeDiv.addEventListener('click', () => {
    // template literal https://www.w3schools.com/js/js_string_templates.asp
    recipeDetails.innerHTML = `<h3>${recipe.name}</h3>
      <div class="ingredients"><strong>Ingredients:</strong> ${recipe.ingredients}</div>
      <p><strong>Preparation:</strong> ${recipe.preparation}</p>`;
    recipeDetails.style.display = 'block';
  });


  // Task 2 c: When the user presses the delete button/icon, the respective item should be deleted from the list
  // adding event listeners Duckett book page 254 EVENTS & 285 EVENTS
  deleteButton.addEventListener('click', () => {
    const index = recipes.indexOf(recipe);
    if (index !== -1) {
      // uses the splice method https://www.w3schools.com/jsref/jsref_splice.asp
      recipes.splice(index, 1);
      listItem.remove();
    }
    // so that the details gets removed too if the recipe is opened.
    recipeDetails.innerHTML = '';
    recipeDetails.style.display = 'none';
  });

  return listItem;
}

/**
 * Displays the list of recipes on the page by creating and appending recipe elements.
 */
function displayRecipes() {
  for (const recipe of recipes) {
    const recipeElement = createRecipeElement(recipe);
    recipeList.append(recipeElement);
  }
}

displayRecipes();
const recipeForm = document.querySelector('#recipeForm');

/**
 * Handles the submit event of the recipe form, adding a new recipe to the list and updating the DOM.
 * @function
 * @param {Event} event - The submit event.
 */
recipeForm.addEventListener('submit', (event) => {
  // Prevent the default form submit action.
  event.preventDefault();

  // Get the ingredient text and split it into an array of individual ingredients.
  const ingredientsText = document.querySelector('#recipeIngredients').value;
  const ingredientsArray = ingredientsText.split('\n');

  // Create an unordered list with the ingredient items.
  // trim reference https://www.w3schools.com/jsref/jsref_trim_string.asp
  // the .map and join method I learned from a course in https://learnjavascript.online
  const ingredientsList = '<ul>' + ingredientsArray.map(ingredient => `<li>${ingredient.trim()}</li>`).join('') + '</ul>';

  // Create a new recipe object with the user's input.
  const newRecipe = {
    name: document.querySelector('#recipeName').value,
    // template literal https://www.w3schools.com/js/js_string_templates.asp
    ingredients: `<div class="recipes">${ingredientsList}</div>`,
    preparation: document.querySelector('#recipePreparation').value,
  };

  // Add the new recipe to the list of recipes and update the DOM.
  // uses the push method https://www.w3schools.com/jsref/jsref_push.asp
  recipes.push(newRecipe);
  const newRecipeElement = createRecipeElement(newRecipe);
  recipeList.append(newRecipeElement);

  // Reset the form after a successful submission.
  // Reference duckett book page 247 EVENTS
  recipeForm.reset();
});

/* shop section 
---------------------------------------------------------------------
*/
// Welcome to the shop script
// 1. Adds item to the cart array
// 2. Displays the cart array to the webpage.
// 3. Counts the amount of times you clicked each item.
// 4. Adds a discount if you have pressed the discount button, disables discount if it is already added
// 5. A checkout function displays the total price including discounts you have to pay, and
// displays it as a window message, then resets everything to prepare for the next purchase.
// 6. Has a clock which is working separately from the rest of the code, and updated every 1000ms

displayTime();

let cartItems = [];
let totalPrice = 0;
let discountApplied = false;

// Item class definition
class Item {
  constructor(productName) {
    if (productName === 'banana') {
      this.name = 'Banana';
      this.price = 0.50;
    } else if (productName === 'potato') {
      this.name = 'Potato';
      this.price = 1.00;
    } else if (productName === 'bread') {
      this.name = 'Bread';
      this.price = 2.00;
    } else if (productName === 'milk') {
      this.name = 'Milk';
      this.price = 2.00;
    } else if (productName === 'bakingpowder') {
      this.name = 'Bakingpowder';
      this.price = 0.40;
    } else if (productName === 'oil') {
      this.name = 'Oil';
      this.price = 1.00;
      this.quality = ['wood', 'premium', 'amazing'];
    }
  }
}

let cart = [];

// addToCart function definition
// Adds the selected item to the cart
function addToCart(productName) {
  let item = new Item(productName);
  cart.push(item);
  // Clear the checkout message by 
  // selecting the element and setting the textContent to an empty string
  const checkoutMessage = document.querySelector('#checkout-message');
  checkoutMessage.textContent = '';
  // Add the item to the cartItems array and update the totalPrice
  cartItems.push(item);
  totalPrice += item.price;
  updateCart();
}

// updateCart function
// Updates the cart display on the webpage
function updateCart() {
  // Select the cart items container and clear its content
  let cartList = document.querySelector('#cart-items');
  cartList.innerHTML = '';
  // Initialize an object to store the counts of each item in the cart
  let itemCounts = {};
  for (let i = 0; i < cartItems.length; i++) {
    let itemName = cartItems[i].name;
    if (itemCounts[itemName] === undefined) {
      itemCounts[itemName] = 1;
    } else {
      itemCounts[itemName]++;
    }
  }
  // Iterate through the itemCounts object, 
  // create an item display div for each item, and append it to the cartList
 for (let itemName in itemCounts) {
    let itemCount = itemCounts[itemName];
    let itemDiv = document.createElement('div');
    let itemPrice = cartItems.find(item => item.name === itemName).price;
    let itemDiscountedPrice = discountApplied ? (itemPrice * 0.8) : itemPrice;
    itemDiv.innerHTML = itemName + ' x ' + itemCount + ' - $' + (itemCount * itemDiscountedPrice).toFixed(2);
    cartList.appendChild(itemDiv);
  }
  // Calculate the total discounted price and update the displayed total price
  let totalDiscountedPrice = discountApplied ? totalPrice * 0.8 : totalPrice;
  const totalPriceElement = document.querySelector('#total-price');
  totalPriceElement.innerHTML = `Total price is ` + totalDiscountedPrice.toFixed(2) + `$`;
}
// checkout function definition
// Handles the checkout process when the user clicks the checkout button
function checkout() {
  const checkoutMessage = document.querySelector('#checkout-message');

  if (cartItems.length > 0) {
    let totalDiscountedPrice = discountApplied ? totalPrice * 0.8 : totalPrice;
    let message = ('Thank you for your purchase! Total cost: $').toUpperCase() + totalDiscountedPrice.toFixed(2);

    // Display the message on the page instead of using the annoying window alert that
    // I got feedback to remove earlier.
    checkoutMessage.textContent = message;
    // Empties the cart
    cartItems = [];
    totalPrice = 0;
    discountApplied = false;

    const discountBtn = document.querySelector(".btn__discount");
    discountBtn.disabled = false;
    updateCart();
  } else {
    let message = 'Your cart is empty!';
    checkoutMessage.textContent = message;
  }
}
// addDiscount function definition
function addDiscount() {
  if (!discountApplied) {
    discountApplied = true;
    updateCart();

    const discountBtn = document.querySelector(".btn__discount");
    discountBtn.disabled = true;
  }
}

// displayTime function
function displayTime() {
  //This line creates a new Date object, which represents the current date and time.
  let currentTime = new Date();
  // This line gets the hours (0-23) from the currentTime object.
  let hours = currentTime.getHours(); 
  // gets the minutes from the currentTime object
  let minutes = currentTime.getMinutes();
//This if statement ensures that both hours and minutes 
// are displayed as two-digit numbers (e.g., "09" instead of "9").
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
// This line concatenates the hours and minutes with a colon (":") 
// in between, creating a string in the format "HH:mm".;
  let timeString = hours + ":" + minutes;
  const dateTimeElement = document.querySelector("#date_time");
  dateTimeElement.textContent = `The time is ${timeString}`;
}

// Call displayTime() function every 1000 milliseconds (1 second) using setInterval method
setInterval(displayTime, 1000);

// Call updateCart() function on page load
updateCart();