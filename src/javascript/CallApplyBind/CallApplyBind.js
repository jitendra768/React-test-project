// Call Apply Bind are predefined methods in javascript;
// call method allows an object to use method into another object
// you can pass arguments indivisualy seperated by comma

const person = {
  firstName: "John",
  lastName: "doe",
  getFullname: function (hometown) {
    return this.firstName + " " + this.lastName + " " + hometown;
  },
};
const person1 = {
  firstName: "Jane",
  lastName: "doe",
};

console.log(person.getFullname.call(person1, "lucknow"));

// Apply Method 

console.log(person.getFullname.apply(person1, ["Ballia"]));

//Bind Methods
// bind make a copy of function and invoke later
let res = person.getFullname.bind(person1, ["Ballia"]);
console.log(res());
