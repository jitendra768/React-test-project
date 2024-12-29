// Print all elements of the nested array arr = [1, [2, [3, 4], 5], 6].

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

let arr = [1, [2, [3, 4], 5], 6];
printArray(arr);
