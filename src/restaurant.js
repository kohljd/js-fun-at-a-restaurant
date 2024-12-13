function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}

function addMenuItem(restaurant, item) {
  const menu = restaurant.menus[item.type];

  if (!menu.includes(item)) {
    menu.push(item);
  }
}

function removeMenuItem(restaurant, item, menuType) {
  const menu = restaurant.menus[menuType]
  const itemIndex = menu.findIndex((food) => food.name === item);

  if (itemIndex >= 0) {
    menu.splice(itemIndex, 1);
    return `No one is eating our ${item} - it has been removed from the ${menuType} menu!`;
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

function checkForFood(restaurant, item) {
  const menu = restaurant.menus[item.type];

  if (menu.includes(item)) {
    return `Yes, we're serving ${item.name} today!`;
  }

  return `Sorry, we aren't serving ${item.name} today.`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood
}