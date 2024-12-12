//complete the calculatePrice function
//Do not alter the starter code
    const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };    
    function calculatePrice(goods){
        //Implement your function here
        
        let totalPrice = 0;

  		for (const product in goods) {
    		const { price, quantity } = goods[product];
    		totalPrice += price * quantity;
  		}
  		return totalPrice;
    }
    console.log(calculatePrice(goods));
    //output : 650