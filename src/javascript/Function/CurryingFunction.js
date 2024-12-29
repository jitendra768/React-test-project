// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
//  Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.
//It helps to create a higher order function.

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(1)(2)(2))

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
