function Animal(name, energy) {
  // let animal = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;
  // return animal;
}

function Animal1(name, energy) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;
  return animal;
}

function AnimalThis(name, energy) {
  // let this = Object.create(Animal.prototype)
  this.name = name;
  this.energy = energy;
  // return this
}

let boo = new AnimalThis("Boo", 66);
// If we do not provide new keyword, implicit this object creation and return will not occur

let aa = new Animal("hh", 77);
console.log(aa);
// here new keyword will automatically do the object creation part and return part implicitly

let animal2 = Animal1("Leo", 44);
console.log(animal2);

function CompleteAnimal(name, energy) {
  this.name = name;
  this.energy = energy;
}

CompleteAnimal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

CompleteAnimal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

const lily = new CompleteAnimal("Lily", 80);
const peril = new CompleteAnimal("Peril", 50);

lily.eat(10);
// lily.sleep(10);
console.log(lily);

// WITHOUT this
function AnimalWithoutThis(name, energy) {
  this.name = name;
  this.energy = energy;
}

const sam = AnimalWithoutThis("Sam", 50);
console.log("Sam ---", sam); // undefined
// here new keyword is not there so no internal creation of this object, thus it returns undefined
