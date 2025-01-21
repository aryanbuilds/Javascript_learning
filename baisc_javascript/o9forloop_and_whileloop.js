// //  for loop
// // A for loop is used to repeat a block of code a known number of times.
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration number: " + i);
// }

// //  if condition inside for loop
// // You can use an if condition inside a for loop to execute code only when certain conditions are met.
// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is an even number");
//     }
// }

// //  for loop inside for loop
// // A for loop inside another for loop is called a nested loop. It is used to iterate over multi-dimensional data structures.
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log("i = " + i + ", j = " + j);
//     }
// }

// //  array inside for loop
// // You can loop through an array using a for loop to access each element.
// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log("Element at index " + i + " is " + array[i]);
// }

// // keyword in loop (break and continue)
// // The 'break' keyword exits the loop immediately, and the 'continue' keyword skips the current iteration and moves to the next one.
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // Exit the loop when i is 5
//     }
//     if (i % 2 === 0) {
//         continue; // Skip the current iteration if i is even
//     }
//     console.log(i); // This will only log odd numbers less than 5
// }

//++++++++++++++++++++++ WHILE LOOP ++++++++++++++++++++++++++++

// //  while loop
// // A while loop repeats a block of code as long as a specified condition is true.
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// //  do while loop
// // A do while loop is similar to a while loop, but it executes the block of code at least once before checking the condition.
let number = 0;
do {
    console.log("Number is: " + number);
    number++;
} while (number < 5);

// //  nested do while loop
// // A do while loop inside another do while loop is called a nested do while loop.
let outer = 0;
do {
    let inner = 0;
    do {
        console.log("Outer: " + outer + ", Inner: " + inner);
        inner++;
    } while (inner < 3);
    outer++;
} while (outer < 3);