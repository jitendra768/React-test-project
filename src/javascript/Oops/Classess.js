// Classe are introduce in the es-6 version of javascript
// They are used to create a blueprint of an object
//javascript class is similar to the javascript constructor function and it is syntactic sugar

class Animal {
  constructor(name, age) {
    this.name = name;
  }
}

const animal = new Animal("dog");
console.log(animal);
