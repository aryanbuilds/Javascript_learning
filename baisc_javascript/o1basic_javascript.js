// ******** VARIABLES Declartion********
//Declaring twice triggers an error

// let $ = 1; // declared a variable with the name "$"
// let _ = 2; // and now a variable with the name "_"
// let $myMoney = 3; // and now a variable with the name "$myMoney"
// let myMoney$ = 4; // and now a variable with the name "myMoney$"
// let my$Money = 5; // and now a variable with the name "my$Money"
// let myMoney = 6; // and now a variable with the name "myMoney"
// let mymoney = 7; // and now a variable with the name "mymoney"
// let my_money = 8; // and now a variable with the name "my_money"

// ***********TYpe of variables declaration***************
// // var Name="aryan"; (global)
// // let age=19;  (block-scoped)
// // const gender="male"; (mutuable)

// console.log(Name); ->aryan
// console.log(age); ->19 
// console.log(gender); ->male

// // ARRAY // //
let arr = [1,2,"Aryan",5,8.1,9]; // array declaration


// ACCESSING ARRAY ELEMENTS
//console.log(arr[2]); // ->Aryan

//********************OBJECT***********************
let obj ={
    Name:"Aryan",
    age:19,
    gender:"male",
    arr:[1,2,"Aryan",5,8.1,9]
}

// ACCESSING OBJECT ELEMENTS
// console.log(obj.arr[2]); // ->Aryan


// NULL IS OBJECT
// console.log(typeof null); ->object
//consle.log(typeof undefined); ->undefined

// **********FUNCTION********************
// function functionName(){
//     let age = 20; // 'let' declares a block-scoped variable
//     console.log(age); // logs 20

//     const gender = "female"; // 'const' declares a block-scoped constant
//     console.log(gender); // logs "female"

//     var Name = "ryan"; // 'var' declares a function-scoped variable
//     console.log(Name); // logs "ryan"
// }
// functionName(); // function calling

const myfunction = function() {
    let age = 20; // 'let' declares a block-scoped variable
    console.log(age); // logs 20
}
myfunction(); // function calling

// MODIFYING ARRAY
//arr[2]="Aryan Rai"; // ->Aryan Rai

//****************LOOPS********************
// // FOR LOOP
//  for(let initilization=0;initilization< arr.length;initilization++){    // for loop
//     // code to be executed
//     console.log(arr[initilization]); // ->1 2 Aryan 5 8.1 9
// }

// // FOR OF LOOP
// for(let element of arr){
//     console.log(element); // ->1 2 Aryan 5 8.1 9
// }

// // FOR IN LOOP
// for(let index in arr){
//     console.log(arr[index]); // ->1 2 Aryan 5 8.1 9
// }

// // DO WHILE LOOP
// let increment=0;
// do{
//     console.log(arr[increment]); // ->1 2 Aryan 5 8.1 9
//     increment++;
// }while(increment<arr.length);

// // WHILE LOOP
// let increment=0;
// while(increment<arr.length){
//     console.log(arr[increment]); // ->1 2 Aryan 5 8.1 9
//     increment++;
// }
