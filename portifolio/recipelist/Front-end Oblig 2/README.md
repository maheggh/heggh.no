For this project I wanted to make a list of objects with 3 pre-made objects, 
and give the user the ability to add on additional objects by typing in the properties in
an HTML form. I thought of different ways of doing it, and after much back and forth ended up with the current solution.

I integrated the code from assignment 1 to have a shop where I could buy the ingredients needed for the recipes shown.

I got to most of the solutions by reading Jon Duckett, looking up things on
w3schools/google, and implementing things I learned from 
https://learnjavascript.online

This website is very up to date, so I might have used a few newer javascript elements than whats in the Jon Duckett book, some examples of 
newer javascript functionality is map() and join(), arrow functions, and
template literals, but I made sure to apply a lot of what I learned from Jon Duckett, and class as well.

Task 2 a: ------------------------------------------------
----------------------------------------------------------

# Recipe code

javascript: 
const recipes = [

  {
    name: 'waffles',
    ingredients: `<div class="recipes"><ul><li>blabla</li></ul>`,
    preparation: blabla </div>`
  },
  {
    name: 'pancakes',
    ingredients: `<div class="recipes"><ul><li>blabla</li></ul>`,
    preparation: blabla </div>`
  },
  {
    name: 'Donuts',
    ingredients: `<div class="recipes"><ul><li>blabla</li></ul>`,
    preparation: blabla </div>`
  },
];

Reasoning:
The Recipe code allows users to add, view, and delete recipes. This documentation covers the initial recipe data provided in the code. I made it an array of object because this seemed to be the easiest way to implement the ability to delete the object as a whole, and because I wanted multiple objects with multiple properties. 

I'm still unsure if I want to include the whole recipe in javascript or if I should load it from the HTML instead, because it is taking up a lot of space in the code.

## Initial Recipes

The initial data for the Recipe code consists of three recipes: Pancakes, Waffles, and Donuts. Each recipe object has a `name`, `ingredients`, and `preparation` field. The `ingredients` field contains an HTML string that displays the ingredients as an unordered list, while the `preparation` field contains an HTML string with step-by-step instructions on how to prepare the recipe.

### Recipes

- **Ingredients:** Provided as an HTML unordered list.
- **Preparation:** Instructions provided as an HTML string.

| References:
| Jon Duckett: Creating an array page 71 & 101 objects


Task 2 b: ------------------------------------------------
----------------------------------------------------------

# Recipe

The Recipe code allows users to add, view, and delete recipes. This documentation covers the main functions of the code.

## Event Listener: recipeDiv click

javascript: 
recipeDiv.addEventListener('click', () => {
  recipeDetails.innerHTML = `<h3>${recipe.name}</h3>
    <div class="ingredients"><strong>Ingredients:</strong> ${recipe.ingredients}</div>
    <p><strong>Preparation:</strong> ${recipe.preparation}</p>`;
  recipeDetails.style.display = 'block';
});

Reasoning: 
This event listener is added to the recipeDiv element inside the createRecipeElement function. To avoid making the code too complex I used the strong tag instead of adding and styling a div, if this were a bigger project I would have done it otherwise for reusability.

When the user clicks on a recipe name in the list, it updates the recipeDetails element with the recipe's name, ingredients, and preparation steps. It also sets the display style of recipeDetails to 'block', making the element visible on the page.


| References:
| // template literal https://www.w3schools.com/js/js_string_templates.asp
| Jon Duckett Events, The document object model 285
| Jon Duckett: Handling event listeners, page 254-259
| 


Task 2 c: ------------------------------------------------
----------------------------------------------------------

## Delete Button Event Listener

The delete button in the recipe list items allows users to remove recipes from the list. The event listener is attached to the delete button with the following functionality:

javascript: 
deleteButton.addEventListener('click', () => {
  const index = recipes.indexOf(recipe);
  if (index !== -1) {
    recipes.splice(index, 1);
    recipeList.removeChild(listItem);
  }
});

Reasoning:
I wanted to implement the ability to delete the list items that are added,
First I made it so that when you click the list item itself it removes itself, but that became troublesome when I decided I also wanted the ability to open up the recipes and explore whats inside as well, so I decided to add a delete button instead.

When the delete button is clicked, an anonymous function is executed.
const index = recipes.indexOf(recipe); - This line of code retrieves the index of the recipe object in the recipes array.

if (index !== -1) { ... } - This conditional checks if the recipe is found in the array (the indexOf method returns -1 if the item is not found). If found, the following actions are performed:

recipes.splice(index, 1); - This line of code removes the recipe object from the recipes array using the splice() method. The first parameter is the index of the item to remove, and the second parameter is the number of items to remove (1 in this case).

recipeList.removeChild(listItem); - This line of code removes the listItem element (the HTML list item that represents the recipe) from the recipeList element (the parent HTML element containing the recipe list items).

The return listItem; statement at the end of the function returns the listItem element that was created and configured in the function.


| References:
| Jon Duckett: Handling event listeners, page 254-259
| uses the splice method https://www.w3schools.com/jsref/jsref_splice.asp