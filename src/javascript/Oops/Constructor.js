// A constructor function is used to create object
// To Create an object from a constructor function we use the new keyword
// we can create multiple object from a constructor function
// we can add new properties in constructor

function Person() {
  this.name = "John";
  this.age = 30;
}

const result = new Person();
result.gender = "male";
console.log(result);

// constructor function paraameter
function Person1(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  };
}

const user = new Person1("Amit", 24, "male");
console.log("🚀 ~ user:", user);
const user1 = new Person1("Shubham", 21, "female");
console.log("🚀 ~ user1:", user1.greet());
