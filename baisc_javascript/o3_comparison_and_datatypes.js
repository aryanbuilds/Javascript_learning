//******** COMPARSION OPERATORS **************

console.log(5==5); // ->true
console.log(5!=5) // ->false, why? Because 5 is equal to 5.
console.log(5!==5) // ->false, difference between == and === is that == is used for value comparison and === is used for value and type comparison.
console.log("2">1) // ->true. Why? Because the string "2" is converted to the number 2.
console.log("2"<1) // ->false. Why? Because the string "2" is converted to the number 2.
console.log("2">"12") // ->true. Why? Because the string "2" is converted to the number 2.
console.log(null==undefined) // ->true, why? Because both null and undefined are equal in value.
console.log(null===undefined) // ->false, why? Because null and undefined are of different types.
console.log(null!=undefined) // ->false, why? Because both null and undefined are equal in value.
console.log(null > 0) // ->false, why? Because null is converted to 0.
console.log(null >= 0) // ->true, why? Because null is converted to 0.
console.log(null < 0) // ->false, why? Because null is converted to 0.
console.log(null <= 0) // ->true, why? Because null is converted to 0.
console.log(null == 0) // ->false, why? Because null is not equal to 0. because null is a falsy value.
//FALSY value are values that are considered false when encountered in a boolean context.
console.log(null === 0) // ->false, why? Because null is not equal to 0. because null is a falsy value.

/*So, in summary whats happening is equality check == works differently
then comparison operator >,<,>=,<=.
- Comparsion operator convert null to number, treating it as 0.
- That's why null>=0 is true and null>0 is false
- Also seeing === doesn't perform type conversion and means STRICT COMPARISON thus null===0 is FALSE.*/



//**********DATA TYPES*************
//++++++++PRIMITIVE DATA TYPES++++++++++++++++
// 1) NUMBER
// let num = 5; // number
// console.log(num); // logs 5
//
// 2) STRING
// let str = "Hello"; // string
// console.log(str); // logs "Hello"
//
// 3) BOOLEAN
// let bool = true; // boolean
// console.log(bool); // logs true
//
// 4) SYMBOL
// let sym = Symbol(); // symbol
// console.log(sym); // logs Symbol()
//
// 5) BIGINT
// let big = 1234567890123456789012345678901234567890n; // bigint
// console.log(big); // logs 1234567890123456789012345678901234567890n
//
// 6) NULL
// let n = null; // null
// console.log(n); // logs null
//
// 7) UNDEFINED
// let u = undefined; // undefined
// console.log(u); // logs undefined
//
//++++++++NON-PRIMITIVE DATA TYPES++++++++++++++++
//  OBJECT
// let obj = { // object
//     name: "Aryan Rai",
//     age: 19
// }
// console.log(obj); // logs { name: "Aryan Rai", age: 19 }
//
// // ARRAY
// let arr = [1, 2, 3, 4, 5]; // array
// console.log(arr); // logs [1, 2, 3, 4, 5]
//

// // FUNCTION
// let func = function() { // function
//     console.log("Hello");
// }
// console.log(func); // logs [Function: func]
//

//**************TYPEOF OPERATOR*******************
// console.log(typeof num); // logs number
// console.log(typeof str); // logs string
// console.log(typeof bool); // logs boolean
// console.log(typeof obj); // logs object
// console.log(typeof arr); // logs object
// console.log(typeof n); // logs object
// console.log(typeof u); // logs undefined
// console.log(typeof func); // logs function
// console.log(typeof sym); // logs symbol
// console.log(typeof big); // logs bigint
//
//****************TYPE CONVERSION*****************
// let x = 5;
// console.log(x); // logs 5
// console.log(typeof x); // logs number
//
// x = "5";
// console.log(x); // logs 5
// console.log(typeof x); // logs string
//
// x = true;
// console.log(x); // logs true
// console.log(typeof x); // logs boolean
//
// x = null;
// console.log(x); // logs null
// console.log(typeof x); // logs object
//
// x = undefined;
// console.log(x); // logs undefined
// console.log(typeof x); // logs undefined
//
// x = [1, 2, 3, 4, 5];
// console.log(x); // logs [1, 2, 3, 4, 5]
// console.log(typeof x); // logs object