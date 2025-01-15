// function greet(name) {
//     return "Hello, " + name + "!";
// }

// // Example usage:
// console.log(greet("Aryan")); // Output: Hello, Aryan!
// console.log(greet("Rai")); // Output: Hello, Rai!

// // greet("arguments") and takes that function greet(paramerter) and returns it if you've used return

// function add(num1,num2){
//     // console.log(num1+num2); -> return nothing
//     let result = num1+num2;
//     return result
// }
// // console.log(typeof result) // undefined -> as nothing is returned only result is printed using console.log()

// console.log(result) // 8 -> this is a number now

// ANOTHER METHOD TO TAKE PARAMETER
// function userCred(username){
//     return `${username} is the username`
// }
// console.log(userCred("Aryan")) // Aryan is the username

//console.log(userCred()) // undefined is the username -> as we are not passing any parameter so we tackle it with control statements

// function userCred(username){
//     if(username===undefined){
//         return "No username Given"
//     }
//     else{
//         return `${username} is the username`
//     }
// }
//console.log(userCred()) // No username Given -> after using control statements

// PROFESSIONAL METHOD As we were evaluating on true condition as undefined and "" are falsy values

// function userCred(username){
//     if(!username){ // ! -> ulta kardo or NOT; as undefined = FALSE. Thus !undefined = TRUE
//         return "No username Given" // THEN THIS BLOCK IS ACTIVATED
//     }
//     return`${username} is the username`
// }
// console.log(userCred())// Value is undefined here thus the above return No username given

// REST OPERATOR -> ...args

// function array(...args){ // if we don't use REST then only first value returns
//     return args // [1,2,3,4,5] -> as we are passing 5 arguments
// }
// console.log(sum(1,2,3,4,5)) // [1,2,3,4,5]  -> returns an array

// function valuearr(val1,val2,...args){
//     return args; // [3,4,5] -> as we are passing 5 arguments
//     // val1 = 1, val2 = 2
// }
// console.log(valuearr(1,2,3,4,5)) // [3,4,5]  -> returns an array


// ++++++++ FUNCTION WITH OBJECTs   +++++++++

// const user = {
//     name: "Aryan",
//     username: "AryanRai",
//     email: "email@gmai.com"
// }

function userwithobj(anyobject){
    return `The user is ${anyobject.name} and his username is ${anyobject.username}`
}

//userwithobj(user)) // The user is Aryan and his username is AryanRai

// DIRECTLY PASS OBJECT AS ARGUMENT TO FUCNTION PARAMETER
// userwithobj({
//     name: "Aryan",
//     username: "AryanRai",
//     email: "any@gmail.com"
// }) // The user is Aryan and his username is AryanRai


// +++++++++++++++++THIS AND ARROW FUNCTION++++++++++++++++++++

// const user = {
//     name: "Aryan",
//     username: "AryanRai", // CURRENT CONTEXT
//     email: "trial@gmail.com",

//     WelcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`) // CURRENT CONTETXT to REFER using this
//         // console.log(this) // prints the whole object
//     }
// }

// user.WelcomeMessage() // AryanRai, welcome to website
// user.username = "Raia" // CHANGING THE VALUE OF USERNAME
// user.WelcomeMessage() // Raia, welcome to website

// console.log(this) // WINDOW OBJECT -> as we are not in any object (WHEN YOU RUN IN BROWSER)
// console.log(this) // {} ->empty object as we are not in any object (WHEN YOU RUN IN NODE JS SERVER)

// THIS Can not be ued in fucntion

// function userfun(){
//     let user = "Aryan"
//     // console.log(this) // full description of fucntion wehn user variable not declared
//     console.log(this.user) // undefined as context only works in object 
// }
// userfun() // undefined


// ARROW FUNCTION -> DOES NOT HAVE ITS OWN THIS KEYWORD

const userarrow = () => {
    console.log(this) // {} -> empty object
}
userarrow() // {} -> empty object

// IMPLICiT RETURN -> single line logic for exmaple adding two number
// const sum = (a,b) => (a+b) //() paranthesis use kara hai isliye,YADH RAKHNA KI AGAR SINGLE LINE LOGIC HAI TOH RETURN KI JARURAT NAHI HAI SILS
// console.log(sum(3,4)); // 7
const implicituserarrow = () => this // {} -> empty object