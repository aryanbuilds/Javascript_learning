# JavaScript Execution Context

JavaScript code execution happens in three main phases:

## 1. Global Execution Context
- Creates global `this` binding
- In browsers: `this` refers to `window` object
- In Node.js: `this` refers to empty object (`{}`)

## 2. Memory Creation Phase
During this phase:
- Variables are allocated with `undefined`
- Function declarations are stored in memory with their definitions
- Also called "Creation Phase"

## 3. Execution Phase
- Code executes line by line
- Variables get their actual values
- When functions are called:
    - New Function Execution Context is created
    - Has its own Memory and Execution phases
    - Return value is sent back to Global Context

> Note: Each function call creates its own execution context with these phases, ensuring proper scope and variable management.

## Example: Execution Context in Action

```javascript
let username = "John"

function greet() {
    let message = "Hello"
    console.log(`${message}, ${username}!`)
}

greet()
```

### How It Executes:

1. **Global Execution Context Created**
   - `username`: `undefined` (Memory Phase)
   - `greet`: function definition stored
   - `username` gets "John" (Execution Phase)

2. **When `greet()` is called**
   - New Function Execution Context created
   - `message`: `undefined` (Memory Phase)
   - `message` gets "Hello" (Execution Phase)
   - Accesses `username` from Global Context
   - Prints: "Hello, John!"
   - Function context destroyed

This demonstrates how different execution contexts interact and maintain variable scope.