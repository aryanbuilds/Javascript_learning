//*****************ARRAY***************************

// Shallow copy is a copy of the array, but not the elements of the array.
// That means if you change the elements of the copied array, the original array will also change.

// Deep copy is a copy of the array and the elements of the array.
// That means if you change the elements of the copied array, the original array will not change.


// ARRAY METHODS

myarr=[1,2,3,4,5,6,7,8,9,10]

// 1. push() - adds an element to the end of the array
//myarr.push(11)
//console.log(myarr)->[1,2,3,4,5,6,7,8,9,10,11]

// 2. pop() - removes the last element of the array, No argument required
//myarr.pop()
//console.log(myarr)->[1,2,3,4,5,6,7,8,9]

// 3. shift() - removes the first element of the array, No argument required
//myarr.shift()
//console.log(myarr)->[2,3,4,5,6,7,8,9,10]

// 4. unshift() - adds an element to the beginning of the array, Computationally expensive
//myarr.unshift(0)
//console.log(myarr)->[0,1,2,3,4,5,6,7,8,9,10]

// 5. includes() - checks if the array includes a certain element, returns boolean
//console.log(myarr.includes(5)) // true

// 6. indexOf() - returns the index of the first occurrence of the element in the array
//console.log(myarr.indexOf(5)) // 4

// 8. join() - joins all the elements of the array into a string, argument is the separator
//const newarr=myarr.join()
//console.log(newarr) // 1,2,3,4,5,6,7,8,9,10
//console.log(typeof newarr) // string


// Slice and Splice are two methods that are used to extract a portion of an array.

// 9. slice() - extracts a portion of the array and returns a new array, arguments are start and end index
//console.log(myarr.slice(2,5)) // [3,4,5]

// 10. splice() - removes elements from the array and returns the removed elements, arguments are start index, number of elements to remove, elements to add
//console.log(myarr.splice(2,3)) // [3,4,5]
//console.log(myarr) // [1,2,6,7,8,9,10]

//console.log(myarr.splice(2,0,3,4,5)) // [], why? because we are not removing any elements

//Basically, slice() does not change the original array, but splice() does change the original array.

//---------- NESTED ARRAYS ------------

// USING push() METHOD -> adds elements to existing array doesn't return a new array
let arr1=["Aryan","Rai"]
let arr2=["abc","def"]
// arr1.push(arr2)
// console.log(arr1) // ["Aryan","Rai",["abc","def"]]
// console.log(arr1[2][1]) // def -> accessing nested array

// USING concat() METHOD -> returns a new array
//arr3 = arr1.concat(arr2)
// console.log(arr3) // ["Aryan","Rai","abc","def"]

//------SPREAD OPERATOR------
// Breaking of Glass -> Spread Operator
// The spread operator is used to unpack elements of an array or an object.
// It is used to make a shallow copy of an array or an object.

// USING spread operator
arr3 = [...arr1,...arr2]
// console.log(arr3) // ["Aryan","Rai","abc","def"]

// USING spread operator to add elements to an array
arr4 = [...arr1,"abc","def"]
// console.log(arr4) // ["Aryan","Rai","abc","def"]

// USing FLAT() method
const array_new=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
//arr_flat=array_new.flat(Infinity) //-> flat method is used to flatten the array
//console.log(arr_flat) // [1,2,3,4,5,6,7,8,9,10,11,12] -> nested array is flattened

// Convert to Array
// 1. Array.from() method -> converts a string to an array
//console.log(Array.from("Aryan")) // ["A","r","y","a","n"]

//------INTERESTING CASE of FORM with Object------
//console.log(Array.from({name:"Aryan",age:19})) // [] -> empty array because object is not iterable

// 2. Array.of() method -> converts a list of arguments to an array
//console.log(Array.of(1,2,3,4,5)) // [1,2,3,4,5]


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*****************OBJECT***************************

//single line object
//Object.crete() method


// OBJECT METHODS
// const obj = {name:"Aryan"}

// console.log(obj.name) // Aryan

// GOOD TECHNIQUE to Access Object Properties
// console.log(obj["name"]) // Aryan, -> this is useful when the property name is stored in a variable for example,

// const obj1={
//     name:"Aryan",
//     "Full name":"Aryan Rai", // The problem here is you can't access this property using dot notation
//     age:19,
//     city:"Delhi"
// }

// console.log(obj1["Full name"]) // Aryan Rai

// ----------------IMPORTANT = USING SYMBOLS in OBJECTS----------------
// Symbols are used to create unique identifiers for objects.
// Symbols are used to create private properties in objects.   

// const id=Symbol("value") // creating a symbol

// const obj_with_symbol={
//     name:"Aryan",
//     age:19,
//     city:"Delhi",
//     [id]:12345 // Using Symbol as a key
// }

// console.log(obj_with_symbol[id]) // 12345 -> accessing the property using symbol

// obj_with_symbol.name = "Aryan Rai" // changing the value of the property
// // console.log(obj_with_symbol) // {name: "Aryan Rai", age: 19, city: "Delhi", Symbol(value): 12345}

//// Making the object immutable
// Object.freeze(obj_with_symbol) // freezing the object, now the object is immutable
// obj_with_symbol.name = "Aryan" // trying to change the value of the property
// console.log(obj_with_symbol) // {name: "Aryan Rai", age: 19, city: "Delhi", Symbol(value): 12345} -> no change

// obj_with_symbol.adding_fun= function(){
//     console.log("THIS IS TO ADD FUNCTION")
// }

// console.log(obj_with_symbol.adding_fun); // fucntion [[anonymous]] -> as only reference of function has been returned bu function is ot executed
// console.log(obj_with_symbol.adding_fun()); // THIS IS TO ADD FUNCTION Undefined



// --++--++--++--++--SINGLETON OBJECT OR OBJECT WITH CONSTRUCTOR(const)--++--++--++--++--

// const obj_with_constructor = new Object() // SINGLETON OBJECT
//const obj_without_singleton = {} // normal declaration 

// console.log(obj_with_constructor); // -> {} empty object
// console.log(obj_without_singleton); //-> {} output is same thus no difference

const userCred ={}

userCred.name = "Aryan"
userCred.id = 123
userCred.isloggedin = true

console.log(userCred); // {name:"Aryan", id=123,isloggedin=true}