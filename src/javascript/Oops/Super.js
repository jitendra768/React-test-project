// In JavaScript, the super keyword is used within classes to call methods or access properties from a parent (superclass) class.

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the Parent class constructor
    this.age = age;
  }
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const child = new Child("ALice", 25);
console.log(child.getInfo());
