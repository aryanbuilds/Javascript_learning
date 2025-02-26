# Promises in JavaScript

Promises are used to handle asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Key Concepts:
- **Asynchronous Operations**: Tasks that don't block the main thread, allowing other code to execute concurrently.
- **Pending**: The initial state of a promise, neither fulfilled nor rejected.
- **Fulfilled**: The operation was successful, and the promise has a resulting value.
- **Rejected**: The operation failed, and the promise has a reason for the failure.

## Creating Promises:
- Promises are created using the `Promise` constructor.
- The constructor takes a function called the "executor" function as an argument.
- The executor function has two parameters: `resolve` and `reject`.
  - `resolve`: Called to fulfill the promise with a value.
  - `reject`: Called to reject the promise with a reason.

## Consuming Promises:
- Promises have methods to handle their results:
  - `then(onFulfilled, onRejected)`: Handles both fulfillment and rejection.
  - `then(onFulfilled)`: Handles only fulfillment.
  - `catch(onRejected)`: Handles only rejection.
  - `finally(onFinally)`: Called regardless of fulfillment or rejection.

### Example: Basic Promise

```javascript
// Create a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched successfully!"); // Fulfill the promise
    } else {
      reject("Data fetch failed!"); // Reject the promise
    }
  }, 2000); // Simulate a 2-second delay
});

// Consume the promise
myPromise
  .then((data) => {
    console.log("Resolved:", data); // Handle fulfillment
  })
  .catch((error) => {
    console.error("Rejected:", error); // Handle rejection
  })
  .finally(() => {
    console.log("Promise settled."); // Run regardless of result
});
```

### Example: Promise Chaining

Promises can be chained using the `.then()` method to create a sequence of asynchronous operations.

```javascript
const promiseChain = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promiseChain
  .then((val) => {
    console.log("First then:", val); // Output: 10
    return val * 2; // Return a new value to pass to the next .then()
  })
  .then((val) => {
    console.log("Second then:", val); // Output: 20
    return val + 5;
  })
  .then((val) => {
    console.log("Third then:", val); // Output: 25
  })
  .catch((error) => {
    console.error("Error in chain:", error);
  });
```

### Example: Promise.all()

`Promise.all()` takes an array of promises and returns a single promise that fulfills when all of the input's promises fulfill or rejects when one of the input's promises rejects.

```javascript
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 2000));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All resolved:", results); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error("One or more rejected:", error);
  });
```

### Example: Promise.race()

`Promise.race()` takes an array of promises and returns a single promise that fulfills or rejects as soon as one of the input's promises fulfills or rejects.

```javascript
const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

Promise.race([promiseA, promiseB])
  .then((result) => {
    console.log("First to settle:", result); // Output: B
  })
  .catch((error) => {
    console.error("One or more rejected:", error);
  });
```

### Practice of Promises and Chaining

```javascript
const promisefive = new Promise((resolve, reject) => {
  setTimeout(function() {
    const failure = false;
    if (!failure) {
      resolve({ username: "Aryan Rai", passwordhash: "^EUV#JDHV&#dJ=", age: 20 });
    } else {
      reject("FAILURE FROM DB CONNECTION");
    }
  }, 2000);
});

promisefive
  .then((userdata) => {
    console.log(userdata);
    return userdata.username;
  })
  .then((username) => {
    console.log("USERNAME IS :", username); // USERNAME IS : Aryan Rai
  })
  .catch((error) => {
    console.log("ERROR GENERATED DUE TO", error);
  });
```

**Output:**
```
{ username: 'Aryan Rai', passwordhash: '^EUV#JDHV&#dJ=', age: 20 }
USERNAME IS : Aryan Rai
```

### Async and Await

The `async` keyword is used to make a function asynchronous. The `await` keyword is used to make a function wait until the promise is resolved. `async` and `await` are used to make the code more readable and understandable.

```javascript
const asyncpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const failure = false;
    if (!failure) {
      resolve({ username: "HARSH MAL HAI", passwordhash: "MALHIAMALBADABADA6969=", age: 20 });
    } else {
      reject("FAILURE");
    }
  }, 2000);
});

async function myasyncfucntion() {
  try {
    const userdata = await asyncpromise;
    console.log(userdata);
  } catch (error) {
    console.log(error);
  }
}
myasyncfucntion();
```

**Output:**
```
{ username: 'HARSH MAL HAI', passwordhash: 'MALHIAMALBADABADA6969=', age: 20 }
```

### API Handling Using Async

```javascript
async function asyncapicall() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // it takes time to convert the response into json format.
    console.log(data);
  } catch (error) {
    console.log("E", error);
  }
}
asyncapicall();
```

### Fetch Call

**Issues in Below Program:**
- At line 208: `return datafromabovethen.username;` is an array of users, not a single user object.
- At line 210: `console.log(username);` // UNDEFINED ERROR

**Solution:**
- The API returns an array of users.
- `datafromabovethen[0].username` accesses the username of the first user.
- Now, the `.then(username => console.log(username))` will correctly print the username.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((datafromabovethen) => {
    console.log(datafromabovethen);
    return datafromabovethen[0].username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => console.log("E", error));
```

**Note:**
- If you get an error code 404, then it means that the API is not working or the URL is wrong.
- You'll get this error 404 as a 'response' while using `fetch()` when you don't get a response from the server.

![alt text](image-1.png)
