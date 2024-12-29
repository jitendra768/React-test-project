// The extends keyword in JavaScript is used in class inheritance to create a new subclass that inherits properties and methods from an existing parent or superclass.

class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return `I am ${this.age} years old.`;
  }
}

const child = new Child("Alice", 25);
console.log(child.greet());
console.log(child.getAge());
