// Prototypal instantiation

function Animal(name, energy) {
  let animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  return animal;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};
Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

let leo = Animal("Leo", 7);
let snoop = Animal("Snoop", 10);

leo.eat(15);
snoop.play(5);
