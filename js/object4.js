const parent = {
  name: "stacey",
  age: 35,
  heritage: "irish"
};

const child = Object.create(parent);
child.name = "ryan";
child.age = 7;

console.log(child.name);
console.log(child.age);
console.log(child.heritage);
