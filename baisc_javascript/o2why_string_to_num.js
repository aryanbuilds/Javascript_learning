let a = 4
let b= 5
// ********ARTHEMATIC OPERATORS********
// console.log(a+b); // ->9
// console.log(a-b); // ->-1
// console.log(a*b); // ->20
// console.log(a/b); // ->0.8
// console.log(a%b); // ->4
// console.log(a**b); // ->1024
// console.log(a++); // ->4
// console.log(a--); // ->5
// console.log(++a); // ->5
// console.log(--a); // ->4
// console.log(a+=b); // ->9
// console.log(a-=b); // ->4
// console.log(a*=b); // ->20
// console.log(a/=b); // ->4
// console.log(a%=b); // ->4
// console.log(a**=b); // ->1024
// console.log(a==b); // ->false
// console.log(a!=b); // ->true

let str = "5"
let str1 = "5.5"
console.log(str+str1); // ->55.5

let str2 = 3
let str3 = "5"
console.log(str2+str3); // ->35 ,When you use the + operator, JavaScript converts 3 to "3" and then concatenates "3" and "5", resulting in "35".
console.log(str2-str3); // ->-2 ,When you use the - operator, JavaScript converts "3" to the number 3 and "5" to the number 5.

// ********TYPE COERCION********
console.log("1"+2); // ->12
console.log(1+"2"); // ->12
console.log(1+2); // ->3
console.log("1"+2+2); // ->122, ToPrimitive is called on the first operand (the string "1"). The output of ToPrimitive is a string, so the + operator performs concatenation.
console.log(1+2+"2"); // ->32

// ********OPERATOR Precedence********

console.log(3 + 4 * 5); // ->23, why? 4*5=20, 20+3=23 precedence of * is higher than +.
console.log((3+4)*5); // ->35, why? 3+4=7, 7*5=35, () has highest precedence.