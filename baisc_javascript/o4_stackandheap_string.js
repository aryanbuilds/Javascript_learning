// //*********** TYPES OF MEMORY************
// // STACK: for primitive data types - string, number, boolean, undefined, null, symbol
// // HEAP: for reference or Non primitive data types - object, array, function

// //*********** STACK ************
// // Stack is a linear data structure which follows a particular order in which the operations are performed.
// // The order may be LIFO(Last In First Out) or FILO(First In Last Out).
// // Mainly the following three basic operations are performed in the stack:
// // Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
// // Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
// // Peek or Top: Returns top element of stack.
// // isEmpty: Returns true if stack is empty, else false.

// //*********** HEAP ************
// // Heap is a large pool of memory used for dynamic memory allocation. Whenever an object is created, it’s always created in the Heap.
// // The heap is a memory used by programming languages to store global variables. By default, all global variables are stored in heap memory space.
// // It is a large and mostly unused memory that is used to store objects, and global variables.
// // The heap is different from the stack. Stack memory is used to store local variables and function call, while heap memory is used to store objects in a reference data type, and also function calls.
// // The heap memory is shared by all threads, so it is thread-safe. The stack is thread-safe because each thread will have its stack memory.
// // The heap memory is not as fast as stack memory. The stack is faster because the access pattern makes it simple to implement: LIFO (Last In First Out). The heap is much more complex to allocate memory from.
// // The stack has a maximum size, while the size of the heap is limited by the size of virtual memory.
// // When the heap memory is full, OutOfMemoryError is thrown. When the stack memory is full, StackOverflowError is thrown.

// //******* STACK and HEAP example in JavaScript ********
// // In JavaScript, the stack contains primitive data types and the heap contains reference data types.

// // Example 1: Stack and Heap with numbers
// let a = 10; // a is stored in stack
// let b = a; // b is stored in stack
// a = 20; // a is stored in stack
// console.log(a); // 20
// console.log(b); // 10

// // Example 2: Stack and Heap with objects
// let obj1 = { name: 'John' }; // obj1 is stored in heap
// let obj2 = obj1; // obj2 is stored in stack
// obj1.name = 'Doe'; // obj1 is stored in heap
// console.log(obj1.name); // Doe
// console.log(obj2.name); // Doe

// // Example 3: Stack and Heap with arrays
// let arr1 = [1, 2, 3]; // arr1 is stored in heap
// let arr2 = arr1; // arr2 is stored in stack
// arr1.push(4); // arr1 is stored in heap
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ******* STRINGS********
// // Strings are immutable in JavaScript. This means that once a string is created, it cannot be changed.
// // Any operation that modifies a string actually creates a new string in memory.
// // Strings are stored in the heap memory.
// // When you modify a string, a new string is created in the heap memory and the reference to the original string is updated to point to the new string.
// // This is why strings are immutable in JavaScript.
// // Example:
// let str1 = 'hello'; // str1 is stored in heap
// let str2 = str1; // str2 is stored in stack
// str1 = 'world'; // str1 is stored in heap
// console.log(str1); // world
// console.log(str2); // hello
// // In the above example, when we modify the value of str1, a new string 'world' is created in the heap memory and the reference to str1 is updated to point to the new string. The original string 'hello' remains unchanged in the heap memory.

// //*********** STRING CONCATENATION ************

// exmaple1:
// let str1 = 'Hello';
// let str2 = 'World';
// let result = str1 + ' ' + str2;
// console.log(result); // Hello World

// exmaple2: *MODERN WAY OF CONCATENATION*(USE THIS METHOD AS SUGGESTED)
// let str1 = 'Hello';
// let str2 = 'World';
// let result = `${str1} ${str2}`;
// console.log(result); // Hello World

// exmaple3: STRING CONCATENATION WITH NUMBERS
// let num1=10;
// let str1 = 'Hello';
// let result = str1 + ' ' + num1;
// console.log(result); // Hello 10

// exmaple4: *MODERN WAY OF CONCATENATION WITH NUMBERS*
// let num1=10;
// let str1 = 'Hello';
// let result = `${str1} ${num1}`;
// console.log(result); // Hello 10

//******METHODS OF STRING ********
const newString = new String('Hello');

// Using toUpperCase method -> convert string to upper case
console.log(newString.toUpperCase()); // "HELLO"

// Using toLowerCase method -> convert string to lower case
console.log(newString.toLowerCase()); // "hello"

// Using charAt method -> returns the character at a specified index
console.log(newString.charAt(0)); // "H"

// Using indexOf method -> returns the index of the first occurrence of a specified value in a string
console.log(newString.indexOf('l')); // 2

// Using slice method -> extract a part of a string and return a new string
console.log(newString.slice(1, 4)); // "ell"

// Using substring method -> similar to slice method
console.log(newString.substring(0, 4)); // "Hell"

// Using Trim method -> remove white spaces from both sides
console.log('  Hello  '.trim()); // "Hello" -> removed white spaces from both sides usefull in form validation

// Using replace method -> replace a substring with another substring
const url = 'https://www.example.com/aryan Rai';
console.log(url.replace(' ', '-')); // "https://www.example.com/aryan-Rai"

//Using includes method -> check if a string contains another string
console.log(url.includes('example')); // true

// Using split method -> split the string into an array of substrings
console.log(url.split('/')); // ["https:", "", "www.example.com", "aryan Rai"]