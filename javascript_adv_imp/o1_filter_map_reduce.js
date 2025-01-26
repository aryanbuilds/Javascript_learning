// Filter, Map, aur Reduce ke basics samajhna - JavaScript mein

// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ------------------ IMPORTANT POINT OF FOREACH---------------------
// const storing_value  = numbers.forEach( (num) => {
//     // console.log(num);
//     return num;
// })

// console.log(storing_value); // undefined -> because forEach does not return anything

// Filter: naya array banata hai jo sirf un elements ko rakhta hai jo test pass karte hain
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Map: naya array banata hai jisme har element par function apply hota hai
const incrementedNumbers = numbers.map(num => num + 10);
console.log('Incremented Numbers:', incrementedNumbers); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Reduce: array ke har element par function apply karke ek single value return karta hai
const sum = numbers.reduce((Accumulator, currentValue) => Accumulator + currentValue, 0);
console.log('Sum of Numbers:', sum); // 55

// Users ke books ko filter aur print karna
const users = [
    { name: 'Alice', books: ['Book1', 'Book2'] },
    { name: 'Bob', books: ['Book3', 'Book4'] },
    { name: 'Charlie', books: ['Book5'] }
];

const userBooks = users.map(user => user.books).flat();
console.log('User Books:', userBooks); // ['Book1', 'Book2', 'Book3', 'Book4', 'Book5']

// Filter aur reduce ka use karke data ko filter aur sum karna
const filteredSum = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
console.log('Sum of Even Numbers:', filteredSum); // 30

// Map method ka use karke har number mein 10 add karna
const addTen = numbers.map(num => num + 10);
console.log('Add Ten:', addTen); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Filter, map, aur reduce ka use karke complex operation
const complexOperation = numbers
    .filter(num => num % 2 !== 0) // Odd numbers ko filter karna
    .map(num => num * 2) // Har odd number ko double karna
    .reduce((acc, num) => acc + num, 0); // Sab doubled odd numbers ko sum karna
console.log('Complex Operation Result:', complexOperation); // 50

// Reduce function ka use karke product nikalna
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log('Product of Numbers:', product); // 3628800

// Accumulator ka use karke max number nikalna
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log('Max Number:', maxNumber); // 10