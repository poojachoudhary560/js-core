// ES6

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }

  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
}

const leo = new Animal("Leo", 70);
const snoop = new Animal("Snoop", 50);
console.log(leo);
console.log(snoop);

function nextToEat(animals) {
  const sortedByLeastEnergy = animals.sort((a, b) => a.energy - b.energy);
  return sortedByLeastEnergy[0].name;
}

console.log(nextToEat([leo, snoop]));

class AnimalWithStatic {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  }
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
  static nextToEat(animals) {
    let sortedByLeastEnergy = animals.sort((a, b) => a.energy - b.energy);
    return sortedByLeastEnergy[0].name;
  }
}

let animal1 = new AnimalWithStatic("Ann1", 20);
let animal2 = new AnimalWithStatic("Ann2", 30);
console.log(AnimalWithStatic.nextToEat([animal1, animal2]));

// Static Method Implementation in ES5
function AnimalEs5(name, energy) {
  this.name = name;
  this.energy = energy;
}

AnimalEs5.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

AnimalEs5.prototype.sleep = function(amount) {
  console.log(`${this.name} is sleeping`);
  this.energy += amount;
};

AnimalEs5.prototype.play = function(amount) {
  console.log(`${this.name} is playing`);
  this.energy -= amount;
};

AnimalEs5.nextToEat = function(animals) {
  const sortedByLeastEnergy = animals.sort((a, b) => a.energy - b.energy);
  return sortedByLeastEnergy[0].name;
};

const leo1 = new AnimalEs5("Leo1", 8);
const leo2 = new AnimalEs5("Leo2", 9);
console.log(AnimalEs5.nextToEat([leo1, leo2]));

// getting Prototype
const prototype = Object.getPrototypeOf(leo1);
console.log(prototype);
console.log(prototype.__proto__);
console.log(prototype === AnimalEs5.prototype);
console.log(prototype === Animal.prototype);
console.log(AnimalEs5.__proto__);
