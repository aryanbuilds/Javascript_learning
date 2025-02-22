# JavaScript Classes and Object-Oriented Programming

## 00:03 JavaScript Classes and Object-Oriented Programming in Great Detail
JavaScript classes are templates for creating objects. They encapsulate data with code to work on that data. Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance.
- CONSTRUCTOR FUNCTION using 'new' keyword
- whenever you use 'new' keyword an empty object is created called INSTANCE.
- Constructor function is called due to 'this' and thus all values are stored in it and returned.
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; // this is a obeject therefore you can store value in this
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    } // this keyword used to set context
}

const person1 = new Person('John', 30);
person1.greet(); // Hello, my name is John and I am 30 years old.
```

## 02:12 JavaScript is Primarily a Prototype-Based Language
JavaScript uses prototypes for inheritance. Every object has a prototype, and it inherits properties and methods from its prototype.

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a noise.
```

## 05:56 Object-Oriented Programming is Used to Avoid Spaghetti Code and Create Modular Components
OOP helps in organizing code into modular, reusable components, making it easier to manage and maintain.

```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

const car1 = new Car('Toyota', 'Corolla');
car1.displayInfo(); // This car is a Toyota Corolla.
```

## 07:45 Object-Oriented Programming Basics and Concepts
OOP concepts include classes, objects, inheritance, encapsulation, and polymorphism.

```javascript
class Shape {
    constructor(type) {
        this.type = type;
    }

    describe() {
        console.log(`This is a ${this.type}.`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
circle.describe(); // This is a circle.
console.log(circle.area()); // 78.53981633974483
```

## 11:27 Accessing Object Literals in JavaScript
Object literals are a simple way to create objects using key-value pairs.

```javascript
const person = {
    name: 'Alice',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); // Hello, my name is Alice.
```

## 13:30 Understanding Properties and Methods in JavaScript
Properties are values associated with an object, and methods are functions that belong to an object.

```javascript
const book = {
    title: 'JavaScript Basics',
    author: 'John Doe',
    read() {
        console.log(`Reading ${this.title} by ${this.author}.`);
    }
};

book.read(); // Reading JavaScript Basics by John Doe.
```

## 17:17 Understanding Global Context and Values in JavaScript
In JavaScript, the global context refers to the global object, which is `window` in browsers and `global` in Node.js.

```javascript
console.log(this); // In a browser, this will log the window object.
```

## 18:55 Understanding Constructor Functions in JavaScript
Constructor functions are used to create objects and set their properties.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person2 = new Person('Bob', 40);
console.log(person2.name); // Bob
```

## 22:19 Understanding Object Values and Access in JavaScript
Object values can be accessed using dot notation or bracket notation.

```javascript
const car = {
    brand: 'Honda',
    model: 'Civic'
};

console.log(car.brand); // Honda
console.log(car['model']); // Civic
```

## 24:01 Understanding the Concept of Constructor Function in JavaScript
Constructor functions allow for the creation of multiple instances of an object with the same properties and methods.

```javascript
function Animal(type) {
    this.type = type;
}

Animal.prototype.describe = function() {
    console.log(`This is a ${this.type}.`);
};

const cat = new Animal('cat');
cat.describe(); // This is a cat.
```

## 27:29 Object Creation and Constructor Function in JavaScript
Objects can be created using constructor functions, which define the properties and methods of the object.

```javascript
function Laptop(brand, model) {
    this.brand = brand;
    this.model = model;
}

const laptop1 = new Laptop('Dell', 'XPS 13');
console.log(laptop1.brand); // Dell
```

## 29:10 Understanding the Constructor and Properties in JavaScript Objects
The constructor function initializes the properties of an object when it is created.

```javascript
function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
}

const phone1 = new Phone('Apple', 'iPhone 12');
console.log(phone1.model); // iPhone 12
```