function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

Animal.prototype.sleep = function(amount) {
  console.log(`${this.name} is sleeping`);
  this.energy += amount;
};

Animal.prototype.play = function(amount) {
  console.log(`${this.name} is playing`);
  this.energy -= amount;
};

const leo = new Animal("Leoo", 7);

for (let key in leo) {
  console.log(`Key: ${key}, value: ${leo[key]}`);
}
console.log("----------------------------");
for (let key in leo) {
  if (leo.hasOwnProperty(key)) {
    console.log(`Key:: ${key} :: Value :: ${leo[key]}`);
  }
}
