let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

const fruit = ["mango", "banana"];
fruit.unshift("graps");
console.log(fruit);

let fruits1 = ["apple", "banana", "orange"];
let lastFruit = fruits1.pop();
console.log(fruits1); // ['apple', 'banana']
console.log(lastFruit); // 'orange'

let fruits2 = ["apple", "banana", "orange"];
let firstFruit = fruits2.shift();
console.log(fruits2); // ['banana', 'orange']
console.log(firstFruit); // 'apple'

// includes()
// Checks if an array contains the specified element, returning true or false.
let fruits4 = ["apple", "banana", "orange"];
console.log(fruits4.includes("banana")); // true
console.log(fruits4.includes("grape")); // false

// forEach()
// Executes a provided function once for each array element.
const items = ["item1", "item2", "item3"];
items.forEach((item) => console.log(item));

// map
// Creates a new array by applying a function to each element.

let number = [1, 2, 3, 4];
let squere = number.map((num) => num ** 2);
console.log(squere);

// filter()
// Creates a new array with elements that pass a specified test.
const numbers = [1, 2, 3, 4, 5, 6];
const res = numbers.filter((item) => item % 2 === 0);
console.log(res);

// Reduce()
// arr.reduce(callback(accumulator, currentValue), initialValue)
// The reduce() method executes a reducer function on each element of the array and returns a single output value.
const num = [1, 2, 3, 4, 5, 6];
let summation = num.reduce((acc,curr)=>acc+curr);
console.log(summation);

const actors = ['shahrukh','suny','ajay','amir'];
let res1 = actors.sort();
console.log(res1);

let fruits5 = ['apple', 'banana'];
let vegetables = ['carrot', 'broccoli'];
let mix = fruits5.concat(vegetables);
console.log(mix); // ['apple', 'banana', 'carrot', 'broccoli']


// The slice() method can be used to create a copy of an array or return a portion of an array.
//  It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
const response = cities.slice(2);
console.log(cities)
console.log(response)

// splice() method will change the contents of the original array.
//  The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
const food = ['pizza', 'cake', 'salad', 'cookie'];

food.splice(1,0,"burrito")

console.log(food)