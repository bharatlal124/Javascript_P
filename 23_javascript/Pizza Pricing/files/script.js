    //create you curried function here with name pizzaPricing.
  function pizzaPricing(size) {
    // Define base prices for different pizza sizes
    const sizePrices = {
        small: 8.00,
        medium: 10.00,
        large: 12.00,
    };

    // Return a curried function
    return function (toppings) {
        // Calculate the cost of selected toppings
        const toppingsCost = toppings.length * 1.50;

        // Return another function to calculate the total price
        return function (quantity) {
            // Calculate the total cost based on size, toppings, and quantity
            const basePrice = sizePrices[size];
            const totalCost = (basePrice + toppingsCost) * quantity;

            // Return the total price rounded to 2 decimal places
            return totalCost.toFixed(2);
        };
    };
}

// Example usage:
const smallPizzaPrice = pizzaPricing("small");
const totalPrice = smallPizzaPrice(["cheese", "mushrooms"])(3);
console.log("Total Price:", totalPrice); // This will calculate the total price for 3 small pizzas with cheese and mushrooms.































// create your curried function here with the name pizzaPricing
// function pizzaPricing(size) {
 
//   const sizePrices = {
//     small: 8.00,
//     medium: 10.00,
//     large: 12.00
//   };

  
//   return function (toppings) {
   
//     const basePrice = sizePrices[size.toLowerCase()] || 0;

   
//     return function (quantity) {
    
//       const total = (basePrice + toppings.length * 1.50) * quantity;

//       return Math.round(total * 100) / 100;
//     };
//   };
// }

// const calculateTotalPrice = pizzaPricing('medium')(['cheese', 'pepperoni']);
// const totalPrice = calculateTotalPrice(2);
// console.log(`Total Price: $${totalPrice}`);
