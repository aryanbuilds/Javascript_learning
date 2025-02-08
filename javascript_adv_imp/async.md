# Understanding Asynchronous Code in JavaScript

## Table of Contents
1. [Introduction](#introduction)
2. [JavaScript as a Single-Threaded Language](#javascript-as-a-single-threaded-language)
3. [JavaScript Execution Context](#javascript-execution-context)
4. [Blocking and Non-Blocking Code](#blocking-and-non-blocking-code)
5. [Difference Between Blocking and Non-Blocking Code](#difference-between-blocking-and-non-blocking-code)
6. [Importance of Blocking and Non-Blocking Code](#importance-of-blocking-and-non-blocking-code)
7. [Web API and Node.js Environments](#web-api-and-nodejs-environments)
8. [setTimeout and setInterval](#settimeout-and-setinterval)
9. [Flow of Data in a Stock System](#flow-of-data-in-a-stock-system)
10. [Delay in Execution with setTimeout](#delay-in-execution-with-settimeout)
11. [Using Fetch and Promises](#using-fetch-and-promises)

## Introduction
**00:03** This video is about understanding asynchronous code in JavaScript.

## JavaScript as a Single-Threaded Language
**01:58** JavaScript is a single-threaded language with performance implications.
### Example:
```javascript
console.log('Start');
setTimeout(() => {
    console.log('This is asynchronous');
}, 1000);
console.log('End');
```

## JavaScript Execution Context
**03:46** JavaScript execution context executes one by one.
### Example:
```javascript
function first() {
    console.log('First function');
}

function second() {
    console.log('Second function');
}

first();
second();
```

## Blocking and Non-Blocking Code
**05:33** Understanding blocking and non-blocking code.
### Example:
Blocking code:
```javascript
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // Blocking
console.log(data);
```
Non-blocking code:
```javascript
fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

## Difference Between Blocking and Non-Blocking Code
**07:22** Difference between blocking and non-blocking code.
### Example:
Blocking code stops further execution until the operation completes, while non-blocking code allows other operations to continue.

## Importance of Blocking and Non-Blocking Code
**09:09** Understanding the importance of writing both blocking and non-blocking code in JavaScript.
### Example:
Blocking code is useful for tasks that must complete before moving on, while non-blocking code is essential for performance in I/O operations.

## Web API and Node.js Environments
**10:53** Environments like Web API and Node.js provide different access to the Document Object Model.
### Example:
In the browser:
```javascript
document.getElementById('example').innerText = 'Hello, World!';
```
In Node.js:
```javascript
const http = require('http');
http.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
}).listen(8080);
```

## setTimeout and setInterval
**12:44** Understanding setTimeout and setInterval in JavaScript.
### Example:
```javascript
setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

setInterval(() => {
    console.log('Executed every 2 seconds');
}, 2000);
```

## Flow of Data in a Stock System
**14:30** Understanding the flow of data in a stock system.
### Example:
```javascript
function getStockData(stock) {
    return fetch(`https://api.example.com/stocks/${stock}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

getStockData('AAPL');
```

## Delay in Execution with setTimeout
**16:11** Understanding the delay in execution with setTimeout.
### Example:
```javascript
console.log('Start');
setTimeout(() => {
    console.log('Executed after delay');
}, 3000);
console.log('End');
```

## Using Fetch and Promises
**17:55** Using fetch and promises for asynchronous operations.
### Example:
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```