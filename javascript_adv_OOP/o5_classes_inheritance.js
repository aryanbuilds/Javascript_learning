// // ES6


// class user {
//     constructor(name, email,password){
//         this.name = name
//         this.email = email
//         this.password = password
//     }
//     encryptedpassword(){
//        return `${this.password}123`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user("aryan","trial@gmail.com","123")
// console.log(user1.encryptedpassword());
// console.log(user1.changeusername());


// // BEHIND THE SCENES

// function Userlegacymethod(user,name,password){
//     this.name = name
//     this.email = email
//     this.password = password
// }

// Userlegacymethod.prototype.encryptedpassword = function(){
//     return `${this.password}123`
// }

// Userlegacymethod.prototype.changeusername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user2legacymethod = new Userlegacymethod("aryan","trial@gmai.com","trial134")

// console.log(user2legacymethod.encryptedpassword());
// console.log(user2legacymethod.changeusername());



//// ************************INHERITANCE************************

// class userinheritance {
//     constructor(name, email,password){
//         this.name = name
//         this.email = email
//         this.password = password
//     }
//     encryptedpassword(){
//        return `${this.password}123`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// class admin extends userinheritance{
//     constructor(name, email, password){
//         super(name, email, password) // super is used to call the parent class constructor.
//     }
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email
//         })
//     }
// }

// const user1 = new userinheritance("aryan", "trial@gmail.com", "123")
// const user2 = new userinheritance("aryan", "e@jejds.com", "123")
// const admin1 = new admin("aryan", "Admin@kds.com", "123")

// let users = [user1, user2] // user1 and user2 are added to the array.
// console.log(users); // user1 and user2 are printed.
// admin1.deleteUser(user1) // user1 is deleted from the array.
// console.log(users); // user1 is deleted and only user2 is printed.



// // BEHIND THE SCENES

// function Userinheritance(name, email,password){
//     this.name = name
//     this.email = email
//     this.password = password
// }

// Userinheritance.prototype.encryptedpassword = function(){
//     return `${this.password}123`
// }

// Userinheritance.prototype.changeusername = function(){
//     return `${this.username.toUpperCase()}`
// }

// function Admin(name, email,password){
//     Userinheritance.call(this, name, email, password)
// }

// Admin.prototype = Object.create(Userinheritance.prototype)
// Admin.prototype.deleteUser = function(user){
//     users = users.filter(u => {
//         return u.email != user.email
//     })
// }

// const user3legacy = new Userinheritance("aryan", "trialinheritance", "123")
// const user4legacy = new Userinheritance("aryan", "trialinheritance", "123")
// const admin1legacy = new Admin("aryan", "admin@gmail.com", "123")

// let userslegacy = [user3legacy, user4legacy]
// console.log(users);
// admin1.deleteUser(user1)
// console.log(users);



//// ************************STATIC METHODS************************

class userstaticmethod{
    constructor(name, email,password){
        this.name = name
        this.email = email
        this.password = password
    }
    encryptedpassword(){
       return `${this.password}123`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
    static countusers(users){ // static is used to call the method without creating an object. 
    // and limited the access of the method from being used in the instances of the class.
        console.log(users.length);
    }
}

const user1 = new userstaticmethod("aryan", "trail@gmail.com", "123")
const user2 = new userstaticmethod("aryan", "trail@gmail.com", "123")
const user3 = new userstaticmethod("aryan", "trail@gmail.com", "123")
const user4 = new userstaticmethod("aryan", "trail@gmail.com", "123")

let users = [user1, user2, user3, user4]

// userstaticmethod.countusers(users) // ERROR: userstaticmethod.countusers is not a function -> static methods are not available in the instances of the class.

// BEHIND THE SCENES

function Userstaticmethod(name, email,password){
    this.name = name
    this.email = email
    this.password = password
}

Userstaticmethod.prototype.encryptedpassword = function(){
    return `${this.password}123`
}

Userstaticmethod.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

Userstaticmethod.countusers = function(users){
    console.log(users.length);
}

const user1legacy = new Userstaticmethod("aryan", "trail@gmail.com", "123")
const user2legacy = new Userstaticmethod("aryan", "trail@gmail.com", "123")
const user3legacy = new Userstaticmethod("aryan", "trail@gmail.com", "123")
const user4legacy = new Userstaticmethod("aryan", "trail@gmail.com", "123")

let userslegacy = [user1legacy, user2legacy, user3legacy, user4legacy]

// Userstaticmethod.countusers(userslegacy) // ERROR: Userstaticmethod.countusers is not a function -> static methods are not available in the instances of the class.

// Static methods are used to call the methods without creating an object. It is used to call the methods directly from the class.
// Static methods are not available in the instances of the class. It is only available in the class itself.