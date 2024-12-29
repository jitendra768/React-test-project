// The for...in and for...of loops in JavaScript are used to iterate over collections,
// but they  behave differently depending on the type of collection.

// for in
// Use Case: When you want to access the keys/properties of an object or the indexes of an array.

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

const arr = [10, 20, 30];
for (let key in arr) {
  console.log(key, arr[key]);
}

// // for...of Loop
// Purpose: Iterates over the values of an iterable object (like arrays, strings, maps, sets, or other iterables).
// Use Case: When you want to access the values of an iterable.

const arr1 = [10, 20, 30];

for (let value of arr1) {
  console.log(value);
}

const str = "hello";

for (let char of str) {
  console.log(char);
}
