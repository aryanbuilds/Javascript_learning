class User {
    constructor(email, password) {
        this._email = email;
        this._password = password; // _password is private property helps prevent Maximum call stack size exceeded error.
    }
    // getter and setter method in javascript 
    // getter and setter are used to get and set the values of an object.
    // getter is used to get the value of an object.
    // setter is used to set the value of an object.
    // getter and setter are used to access the private properties
    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`; // Prevent Maximum call stack size exceeded error.
        // Koi agar access karna chahta hai toh password ko toh usko password + hitesh milega.
        //Protection of the password.
    }

    set password(value) {
        this._password = value; // Store karna ke liye ye password hai but get karne ke liye upar wala password hai.
    }
}

const hitesh = new User("get@setter.ai", "abcd");
console.log(hitesh.email);
console.log(hitesh.password);