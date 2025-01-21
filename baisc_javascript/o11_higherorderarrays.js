// 01:42 Putting objects inside arrays and accessing values through loops
const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Jim', age: 21 }
];

students.forEach(function(student) {
    console.log(student.name + ' is ' + student.age + ' years old');
});

// 05:19 Introduction to maps in JavaScript
const map = new Map();
map.set('name', 'John');
map.set('age', 20);

console.log(map.get('name')); // John
console.log(map.get('age')); // 20

// 07:10 Setting values in an object and accessing data from objects
const person = {
    name: 'Jane',
    age: 22
};

person.city = 'New York';
console.log(person);

// 11:02 Using high order array loops in JavaScript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// 13:24 Working with high order array loops for JavaScript
const filtered = numbers.filter(function(num) {
    return num > 2;
});
console.log(filtered); // [3, 4, 5]

// 18:09 Loops in JavaScript arrays
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 20:02 Maps cannot be iterated over in a loop like arrays
// This will throw an error
// for (let i = 0; i < map.length; i++) {
//   console.log(map[i]);
// }

// Correct way to iterate over a Map
map.forEach(function(value, key) {
    console.log(key + ': ' + value);
});

// 23:36 Functions in JavaScript automatically know the scope and parameters
function greet(name) {
    console.log('Hello, ' + name);
}
greet('John'); // Hello, John

// 25:21 Understanding the concept of named and anonymous functions in JavaScript
const namedFunction = function named() {
    console.log('This is a named function');
};

const anonymousFunction = function() {
    console.log('This is an anonymous function');
};

namedFunction();
anonymousFunction();

// 29:21 Understanding high order array loops in JavaScript
const sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 15

// 31:29 Accessing values inside objects using array loops
students.forEach(function(student) {
    console.log(student.name);
});