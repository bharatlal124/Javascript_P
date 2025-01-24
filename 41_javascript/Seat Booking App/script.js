document.addEventListener("DOMContentLoaded", function () {
  const selectMovie = document.getElementById("selectMovie");
  const movieNameElement = document.getElementById("movieName");
  const moviePriceElement = document.getElementById("moviePrice");
  const totalPriceElement = document.getElementById("totalPrice");
  const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
  const numberOfSeatElement = document.getElementById("numberOfSeat");
  const seatContainer = document.getElementById("seatCont");
  const proceedBtn = document.getElementById("proceedBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const seats = seatContainer.querySelectorAll("#seatCont .seat:not(.occupied)");

    
    const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
  // Default movie
  let selectedMovie = moviesList[0];

  // 1. Update the dropdown menu with moviesList
  moviesList.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = movie.movieName;
    selectMovie.appendChild(option);
  });

  // 2. Set default movie name and price
  movieNameElement.textContent = selectedMovie.movieName;
  moviePriceElement.textContent = `$ ${selectedMovie.price}`;

  // 3. Add event listener to select element
  selectMovie.addEventListener("change", function () {
    selectedMovie = moviesList[this.value];
    movieNameElement.textContent = selectedMovie.movieName;
    moviePriceElement.textContent = `$ ${selectedMovie.price}`;
    updateTotalPrice();
  });

  // 5. Add event listener to each unoccupied seat
  const selectedSeats = [];
  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        this.classList.add("selected");
        selectedSeats.push(this);
      } else {
        this.classList.remove("selected");
        const index = selectedSeats.indexOf(this);
        selectedSeats.splice(index, 1);
      }
      updateTotalPrice();
      updateSelectedSeats();
    });
  });

  // 7. Add event listener to continue button
  proceedBtn.addEventListener("click", function () {
    if (selectedSeats.length === 0) {
      alert("Oops! No seat selected.");
    } else {
      alert("Yayy! Your seats have been booked.");
      selectedSeats.forEach((seat) => {
        seat.classList.remove("selected");
        seat.classList.add("occupied");
      });
      updateTotalPrice();
      updateSelectedSeats();
    }
  });

  // 8. Add event listener to cancel button
  cancelBtn.addEventListener("click", function () {
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
    });
    selectedSeats.length = 0;
    updateTotalPrice();
    updateSelectedSeats();
  });

  // Helper function to update total price based on selected seats
  function updateTotalPrice() {
    const totalPrice = selectedSeats.length * selectedMovie.price;
    totalPriceElement.textContent = `$ ${totalPrice}`;
  }

  // Helper function to update selected seats section
  function updateSelectedSeats() {
    numberOfSeatElement.textContent = selectedSeats.length;
    if (selectedSeats.length === 0) {
      selectedSeatsHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
    } else {
      selectedSeatsHolder.innerHTML = "";
      selectedSeats.forEach((seat) => {
        const seatNumber = seat.textContent;
        const seatElement = document.createElement("span");
        seatElement.textContent = seatNumber;
        seatElement.classList.add("selectedSeat");
        selectedSeatsHolder.appendChild(seatElement);
      });
    }
  }
});
