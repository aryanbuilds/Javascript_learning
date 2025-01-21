// Higher Order Array Loops in JavaScript

// Example of putting objects inside arrays and accessing values through loops
const students = [
    { name: 'John', age: 18 },
    { name: 'Jane', age: 20 },
    { name: 'Jim', age: 19 }
];

// Using forEach to loop through the array
students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});

// Introduction to maps in JavaScript
const studentMap = new Map();
studentMap.set('John', { age: 18 });
studentMap.set('Jane', { age: 20 });
studentMap.set('Jim', { age: 19 });

// Setting values in an object and accessing data from objects
const studentObj = {
    John: { age: 18 },
    Jane: { age: 20 },
    Jim: { age: 19 }
};

console.log(studentObj['John'].age); // Accessing data from object

// Using high order array loops in JavaScript
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with doubled values
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Using filter to create a new array with numbers greater than 2
const filteredNumbers = numbers.filter(num => num > 2);
console.log(filteredNumbers);

// Using reduce to sum all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Loops in JavaScript arrays
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Maps cannot be iterated over in a loop like arrays
// Instead, use forEach or for...of
studentMap.forEach((value, key) => {
    console.log(`Name: ${key}, Age: ${value.age}`);
});

// Functions in JavaScript automatically know the scope and parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('John');

// Understanding the concept of named and anonymous functions in JavaScript
const namedFunction = function named() {
    console.log('This is a named function');
};

const anonymousFunction = function() {
    console.log('This is an anonymous function');
};

namedFunction();
anonymousFunction();

// Accessing values inside objects using array loops
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

for (const person of people) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}