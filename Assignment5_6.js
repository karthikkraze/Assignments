class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand},
                   Model: ${this.model},
                   Year: ${this.year},
                   Color: ${this.color}, 
                   Price: $${this.price}, 
                   Gas: ${this.gas} liters`);
    }
  }
  
  // Create car objects
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  const cars = [car1, car2, car3, car4, car5, car6];
  
  for (let turn = 1; turn <= 7; turn++) {
    console.log(`Turn ${turn}`);
    const remainingCars = [];
  
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
  
      // Calculate gas loss for the current turn
      let gasLoss = 5;
      if (car.year < 2023) {
        gasLoss += 2023 - car.year;
      }
  
      car.gas -= gasLoss;
  
      // Print the car details and honk
      car.honk();
  
      if (car.gas > 0) {
        remainingCars.push(car);
      } else {
        console.log(`${car.brand} ${car.model} ran out of gas.`);
      }
    }
  
    cars.length = 0; // Clear the cars array
    cars.push(...remainingCars); 
    console.log();
  }
  
  // Determine the winner
  let winner = cars[0];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].price > winner.price) {
      winner = cars[i];
    }
  }
  console.log(`The winner is ${winner.brand} ${winner.model} with a price of $${winner.price}.`);
  