// Complete the totalOrderValue function
// Do not alter the starter code
const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 }
    ]
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 }
    ],
    discountCode: "COFFEELOVER"
  }
];

function totalOrderValue(orders, applyDiscount) {
  // Implement your function here
  // The function should return the total price after applying the discount.
  const totalValue = orders
    .map((order) => {
      // Calculate the order value without discount
      const orderValue = order.items.reduce((acc, item) => acc + item.price, 0);
      
      // Apply discount if applicable
      const discountedValue = applyDiscount(order.discountCode, orderValue);

      return discountedValue;
    })
    .reduce((acc, value) => acc + value, 0);

  return totalValue.toFixed(2);
}

// Define your callback function here to calculate the discount.
function applyDiscount(discountCode, orderValue) {
 
  switch (discountCode) {
    case "COFFEELOVER":
      return orderValue * 0.9; 
    case "TEALOVER":
      return orderValue * 0.8; 
    default:
      return orderValue; 
  }
}

const result = totalOrderValue(orders, applyDiscount);
console.log(result); 