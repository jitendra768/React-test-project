// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.

// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

const x = 5;
function outer() {
  const y = 10;
  return function inner() {
    let z = 20;
    console.log(x + y + z);
  };
}

console.log(x);
// console.log(y);
// console.log(z);
console.log(outer()());

// 2

function parentFunc(x){
    return function childFunc(y){
        console.log(x*y);
    }
}
const multiply = parentFunc(5);
// console.log(multiply)
console.log(multiply(2));
console.log(multiply(3));