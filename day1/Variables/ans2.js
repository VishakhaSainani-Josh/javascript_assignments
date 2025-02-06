/*2. Use the typeof operator to find the types of different variables. Specially note what typeof operator 
returns for arrays, null values and NaN. How can you find if a variable is an array or NaN besides typeof? 
 */

console.log(typeof "hello") //string
console.log(typeof 1) //number
console.log(typeof ("hello" +"world")) //string
console.log(typeof false) //boolean
console.log(typeof x) //undefined
console.log(typeof 1.21) //number
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof NaN) //number
console.log(typeof []) //object
console.log(typeof {}) //object

//We can use isArray() function to check whether a variable is an array
let arr=[1,2,3]
console.log(Array.isArray(arr)); //true


//We can use isNan() function to check whether a variable is not a number
let a=NaN
console.log(isNaN(a)) //true

let b=4
console.log(isNaN(b)) //false

let c="hello"
console.log(isNaN(c)) //true
