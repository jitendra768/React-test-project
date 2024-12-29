// *
// **
// ***
// ****
// *****

// Print this pattern

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j <= i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j >=6- i; j++) {
//         process.stdout.write("*"); // Print an asterisk for the current column
//     }
//     console.log(); // Move to the next line after completing a row
// }

//     *
//    **
//   ***
//  ****
// *****

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= 6 - i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// *****
//  ****
//   ***
//    **
//     *

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// *****
// ****
// ***
// **
// *

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j <= 6 - i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 9; j++) {
//     if (j >= 6 - i && j <= 4 + i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 9; j++) {
//     if (j <= 6 - i || j >= 4 + i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *    
// let i=1;
// let n=13;
// let p=n+1
// for(let i=1; i<=n; i++){

//   for(let j=1; j<=n; j++){ 
//     if (j<=i && j<=p-i) {
//       process.stdout.write(" * ");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//    *
//   * * 
//  * * *
// * * * *

 for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 7; j++) {
      if (j/i && j%i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
