// In javascript the 'this' keyword refer to an object
// alone this refer to the global object
//In a function this refer to the global object
//In a function in strict mode this is undefined
//Method like call(), apply(), bind() can refer this to any object

console.log(this); //this refer to the window object

function saySomething() {
  console.log(this);
}

saySomething(); //this refer to the window object

const club = {
  name: "Arsenal",
  yearFounded: "1989",
  details() {
    return `Hey, ${this.name} ${this.yearFounded}`;
  },
};

console.log(club.details());

// constructor function

function Country(name) {
  this.name = name;
  this.age = 1960;

  this.info = function () {
    console.log(`${this.name} was founded ${this.age} years ago`);
  };
}

const country = new Country("Nigeria");
console.log(country.name);
console.log(country.info());
