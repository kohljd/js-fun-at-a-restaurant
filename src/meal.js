function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(foodName, price, type) {
  return {
    name: foodName,
    price: price,
    type: type,
  }
}

function addIngredients(ingredient, ingredientList) {
  if (!ingredientList.includes(ingredient)) {
    ingredientList.push(ingredient);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price *= 0.9;
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
