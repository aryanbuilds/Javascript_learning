/**
 * Control Flow and Conditional Statements
 * 
 * This script demonstrates various control flow and conditional statements in JavaScript.
 * 
 * Topics covered:
 * 1. If Statement and Comparison Operators
 * 2. Else Keyword
 * 3. Variable Scope (var vs let/const)
 * 4. Else-if Statement
 * 5. Switch Case Statement
 * 6. Truthy & Falsy Values
 * 7. Nullish Coalescing Operator
 * 
 * Important Points:
 * - Control flow statements allow you to control the execution of code based on conditions.
 * - Comparison operators compare values and return a boolean result.
 * - The `if` statement executes a block of code if the specified condition is true.
 * - The `else` keyword specifies a block of code to be executed if the `if` statement's condition is false.
 * - The `else-if` statement allows you to specify a new condition if the previous condition is false.
 * - The `switch` statement evaluates an expression and executes code based on matching case labels.
 * - `var` is function-scoped, while `let` and `const` are block-scoped.
 * - `const` variables are immutable, meaning their value cannot be changed once assigned.
 * - Truthy values are values that evaluate to true in a boolean context, while falsy values evaluate to false.
 * - The Nullish Coalescing Operator (`??`) returns the right-hand operand when the left-hand operand is null or undefined.
 * 
 * Tips for Interviews:
 * - Understand the difference between `==` and `===`. The `==` operator performs type coercion, while `===` does not.
 * - Understand the scope differences between `var`, `let`, and `const`.
 * - Use the `switch` statement for cleaner and more readable code when handling multiple conditions.
 * - Remember that `0`, `""`, `null`, `undefined`, `NaN`, and `false` are falsy values.
 * - Use the Nullish Coalescing Operator (`??`) to provide default values for potentially null or undefined variables.
 * - Practice writing clean and readable conditional statements to improve code maintainability.
 */

// ========== Control Flow and Conditional Statements ==========

// 1. If Statement and Comparison Operators
// Theory: The `if` statement executes a block of code if the specified condition is true. 
// Comparison operators compare values and return a boolean result.
let age = 18;
if (age >= 18) {
    console.log("You can vote!"); // Example: "You can vote!" will be logged because age is 18.
}

// Comparison Operators Examples
console.log(5 > 3);   // true
console.log(5 >= 5);  // true
console.log(5 < 3);   // false
console.log(5 === 5); // true
console.log(5 !== 3); // true

// 2. Else Keyword
// Theory: The `else` keyword specifies a block of code to be executed if the `if` statement's condition is false.
let time = 20;
if (time < 12) {
    console.log("Good morning!"); // Example: This will not be logged because time is not less than 12.
} else {
    console.log("Good evening!"); // Example: "Good evening!" will be logged because time is 20.
}

// 3. Variable Scope (var vs let/const)
// Theory: `var` is function-scoped, while `let` and `const` are block-scoped. `const` variables are immutable.
// var x = 10; // Function scoped
// let y = 20; // Block scoped
// const z = 30; // Block scoped, immutable

// {
//     var x = 1; // Same variable, modified
//     let y = 2; // New variable, different scope
//     console.log(x, y); // Example: 1, 2
// }
// console.log(x, y); // Example: 1, 20

// 4. Else-if Statement
// Theory: The `else-if` statement allows you to specify a new condition if the previous condition is false.
let score = 85;
if (score >= 90) {
    console.log("A Grade"); // Example: This will not be logged because score is not greater than or equal to 90.
} else if (score >= 80) {
    console.log("B Grade"); // Example: "B Grade" will be logged because score is 85.
} else {
    console.log("C Grade"); // Example: This will not be logged because the previous condition is true.
}

// 5. Switch Case Statement
// Theory: The `switch` statement evaluates an expression and executes code based on matching case labels.
let role = "admin";
switch (role) {
    case "admin":
        console.log("Full access"); // Example: "Full access" will be logged because role is "admin".
        break;
    case "user":
        console.log("Limited access"); // Example: This will not be logged because role is not "user".
        break;
    default:
        console.log("No access"); // Example: This will not be logged because there is a matching case.
}

// 6. Truthy & Falsy Values
// Theory: Falsy values are false, 0,-0,BigInt "", null, undefined, NaN. Truthy values are everything else.

// Empty Array Check Example
let arr = [];
if (arr.length === 0) {
    console.log("Array is empty"); // Example: "Array is empty" will be logged because arr is an empty array.
}

// Empty Object Check Example
let obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is empty"); // Example: "Object is empty" will be logged because obj is an empty object.
}

// 7. Nullish Coalescing Operator
// Theory: The Nullish Coalescing Operator (`??`) returns the right-hand operand when the left-hand operand is null or undefined.

// Nullish Coalescing Operator Example
let userInput = null;
let defaultValue = "default";
console.log(userInput ?? defaultValue); // Example: "default" will be logged because userInput is null.

// ?? vs || Example
let count = 0;
console.log(count ?? 42);  // Example: 0 will be logged because count is not null or undefined.
console.log(count || 42); // Example: 42 will be logged because count is falsy (0).

