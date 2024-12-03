//IIFE module pattern

var cart = [];
let total = 0;

function calculateTotal() {
  total = cart.reduce((acc, item) => acc + item.price, 0);
}

function addItem(item) {
  cart.push(item);
  calculateTotal();
}

function getTotal() {
  return total;
}

function getCartContents() {
  return cart;
}

addItem({ id: 1, pName: "Product1", price: 10 });
addItem({ id: 2, pName: "Product2", price: 20 });
addItem({ id: 3, pName: "Product3", price: 30 });
addItem({ id: 4, pName: "Product4", price: 40 });

const cartItems = document.getElementById("cart-items");

const cartContent = getCartContents();
cartContent.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${item.pName}: $${item.price}`;
  cartItems.appendChild(listItem);
});

//Total price elements
const totalPriceElement = document.getElementById("total-price");
//display total price
totalPriceElement.textContent = `Total: $${getTotal()}`;
