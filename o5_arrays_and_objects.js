//*****************ARRAY***************************

// Shallow copy is a copy of the array, but not the elements of the array.
// That means if you change the elements of the copied array, the original array will also change.

// Deep copy is a copy of the array and the elements of the array.
// That means if you change the elements of the copied array, the original array will not change.


// ARRAY METHODS

myarr=[1,2,3,4,5,6,7,8,9,10]

// 1. push() - adds an element to the end of the array
//myarr.push(11)
//console.log(myarr)->[1,2,3,4,5,6,7,8,9,10,11]

// 2. pop() - removes the last element of the array, No argument required
//myarr.pop()
//console.log(myarr)->[1,2,3,4,5,6,7,8,9]

// 3. shift() - removes the first element of the array, No argument required
//myarr.shift()
//console.log(myarr)->[2,3,4,5,6,7,8,9,10]

// 4. unshift() - adds an element to the beginning of the array, Computationally expensive
//myarr.unshift(0)
//console.log(myarr)->[0,1,2,3,4,5,6,7,8,9,10]

// 5. includes() - checks if the array includes a certain element, returns boolean
//console.log(myarr.includes(5)) // true

// 6. indexOf() - returns the index of the first occurrence of the element in the array
//console.log(myarr.indexOf(5)) // 4

// 8. join() - joins all the elements of the array into a string, argument is the separator
//const newarr=myarr.join()
//console.log(newarr) // 1,2,3,4,5,6,7,8,9,10
//console.log(typeof newarr) // string


// Slice and Splice are two methods that are used to extract a portion of an array.

// 9. slice() - extracts a portion of the array and returns a new array, arguments are start and end index
//console.log(myarr.slice(2,5)) // [3,4,5]

// 10. splice() - removes elements from the array and returns the removed elements, arguments are start index, number of elements to remove, elements to add
//console.log(myarr.splice(2,3)) // [3,4,5]
//console.log(myarr) // [1,2,6,7,8,9,10]

//console.log(myarr.splice(2,0,3,4,5)) // [], why? because we are not removing any elements

//Basically, slice() does not change the original array, but splice() does change the original array.

