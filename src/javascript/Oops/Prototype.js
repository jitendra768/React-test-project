// all javascript Object inherit properties and methods from a prototype
// javascript prototype property allow you to add new properties to object constructors.
// prototype property is used to add new methods to object constructors.

function Persion(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

Persion.prototype.first = function () {
  console.log(`${this.first} ${this.last}`);
};

let person1 = new Persion("AMit", "kumar", 34);
console.log(person1.first);
