//Rest also start with three dots 
//Rest pack the element
//Rest work with function

// Before the Rest Operator

const arr = [1, 2, 3, 4, 5];

const first = arr[0]; // Extracting the first element
const rest = arr.slice(1); // Collecting the rest of the elements

console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]

// After the Rest Operator

const [firstt, ...restt] = [1, 2, 3, 4, 5];
console.log("First element:", firstt); // 1
console.log("Rest of the elements:", restt); // [2, 3, 4, 5]


// Rest Operator Use Cases
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30

// Array Destructuring
const [firste, second, ...reste] = [1, 2, 3, 4, 5];
console.log("First element:", firste); // First element: 1
console.log("Second element:", second); // Second element: 2
console.log("Rest of the elements:", reste); // Rest of the elements: [3, 4, 5]