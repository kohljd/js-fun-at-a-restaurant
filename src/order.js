function takeOrder(order, orders) {
  if (orders.length < 3) {
    orders.push(order);
  }
}

function refundOrder(orderNumber, orders) {
  const orderIndex = orders.findIndex((order) => order.orderNumber === orderNumber);
  orders.splice(orderIndex, 1);
}

function listItems(orders) {
  return orders.map(order => order.item).join(", ");
}

function searchOrder(orders, item) {
  return orders.some((order) => order.item === item);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}