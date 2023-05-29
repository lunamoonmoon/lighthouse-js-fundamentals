const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for(let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

const reversedIngredients = [];
for(let i = ingredients.length - 1; i >= 0; i--) {
  let reverse = ingredients[i];
  reversedIngredients.push(reverse);
}
console.log(reversedIngredients);
//index = array.length - 1 aka the last index of ingredients then we stop at 0 decreasing each loop another option is > ingredients.reverse(); console.log(ingredients);
