// Returns details about a specific property's configuration on an object
// Object.getOwnPropertyDescriptor(Jiski property dekhni Hai, Aur ushma kya dekhna hai or USka object)
//Exmaple:-
// Object.getOwnPropertyDescriptor(Math, 'PI')

// // Returns details about all properties' configurations on an object
// Object.getOwnPropertyDescriptors 

// // Lists all property names directly belonging to an object (not from prototype)
// Object.getOwnPropertyNames 

// // Lists all Symbol properties directly on an object
// Object.getOwnPropertySymbols 

// // Returns the parent object this object inherits from
// Object.getPrototypeOf 

// // Checks if two values are exactly identical
// Object.is 

// // Checks if new properties can be added to an object
// Object.isExtensible 

// // Checks if an object is completely locked (can't add/delete/change properties)
// Object.isFrozen 

// // Checks if an object is sealed (can't add/delete properties, but can modify existing ones)
// Object.isSealed 

// // Lists all normal, accessible property names directly on an object
// Object.keys 

// // Locks an object so no new properties can be added
// Object.preventExtensions 


// QUESTION - HOW TO CHANGE VALUE OF PI IN MATH OBJECT?
// Answer:-

const math = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(math);

// Output:-
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
// value: 3.141592653589793
// writable: false
// enumerable: false
// configurable: false

// We can see that the value of PI is 3.141592653589793 and it is not writable, enumerable, and configurable.
// So, we can't change the value of PI in the Math object.

// But we can change the value of PI in our own object like this:-
const myproperty = {
    name:"Aryan",
    age:19,
    value:1234
}
console.log(myproperty);
// Output:-
// { PI: 3.14, age: 19, value: 1234 }

// Checking the property of 'name' in myproperty object.
const property = Object.getOwnPropertyDescriptor(myproperty, 'name'); // if you write only object it "myproperty" then it will print undefined.
console.log(property);

// Output:-
// { value: 'Aryan', writable: true, enumerable: true, configurable: true }
// value: 'Aryan'
// writable: true
// enumerable: true
// configurable: true

// Now, modifying the properties of 'name' in myproperty object.
Object.defineProperty(myproperty, 'name', {
    value: 'Aryan',
    writable: false,
    enumerable: false,
    // configurable: false
});
console.log(myproperty);
//OUTPUT:-
// { age: 19, value: 1234 }


// Now, checking the property of 'name' in myproperty object.
console(Object.getOwnPropertyDescriptor(myproperty, 'name'));

// Output:-
// {
//     value: 'Aryan',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }


//// ************************Iterating over Object************************

for (let [key,value] of Object.entries(myproperty)){
    if(typeof value !== 'function'){ // applying condition to check if the value is not a function.
        console.log(`${key}: ${value}`);
    }
}

// OUTPUT:- // AS NAME Property in myproperty is not writable and enumerable so it will not print the name property.
// { name: 'Aryan', age: 19, value: 1234 }
// age: 19
// value: 1234
