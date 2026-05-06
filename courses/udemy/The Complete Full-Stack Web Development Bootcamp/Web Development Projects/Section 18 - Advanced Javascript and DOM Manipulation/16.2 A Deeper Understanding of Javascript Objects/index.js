const houseKeeper1 = {
  name: "Jane",
  age: 30,
  yearsOfExperience: 5,
  clean: function () {
    console.log("Cleaning in progress...");
  },
};

console.log(houseKeeper1);

const houseKeeper2 = {
  name: "John",
  age: 40,
  yearsOfExperience: 10,
  clean: function () {
    console.log("Cleaning in progress...");
  },
};

console.log(houseKeeper2);

function HouseKeeper(name, age, yearsOfExperience) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.clean = function () {
    console.log("Cleaning in progress...");
  };
}

const houseKeeper3 = new HouseKeeper("Mary", 35, 7);

console.log(houseKeeper3);

// Install Node.js to run this code in the terminal.