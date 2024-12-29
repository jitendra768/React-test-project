// spreed start with three dots (...)
//Spreed operator unpack the element [].
//spreed can clone or copy the element
// can merge to array or object
//spreed clone a object but shallow

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combine = [...arr1, ...arr2];
console.log("Combined array:", combine);


function add(a,b,c){
    return a+b+c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result); // 6