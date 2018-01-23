var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemName = item;
  const min = Math.ceil(min);
  const max = Math.floor(max);
  const itemPrice = Math.floor(Math.random() * (max - min + 1) + min);
  cart.push({[itemName]: [itemPrice]});
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
