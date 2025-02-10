function timer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      function () {
        console.log(i); // Print the current value of i
      },
      1000 * i // Delay based on current loop iteration
    );
    console.log("Hello ninjas!"); // Prints immediately during each loop iteration
  }
}

timer();
