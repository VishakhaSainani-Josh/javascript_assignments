/*2. What makes a method mutating or non mutating in Javascript? 
Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: 
○ push 
○ pop 
○ filter 
○ find 
○ sort 
○ map  */


/*Mutating methods are array methods that modify the original array,
 while non-mutating methods return a new array without modifying the original */

let arr=[1,2,3,4,5,6,7,8]

console.log("push")
arr.push(9)
console.log(arr); //changes array -> mutating method

console.log("pop")
arr.pop()
console.log(arr) //changes array -> mutating method

console.log("filter")
let doublearr=arr.filter((num)=>num*2)
console.log(doublearr)
console.log(arr) //doesn't change array ->non mutating method

console.log("find")
let ans=arr.find((num)=>num>4)
console.log(ans)
console.log(arr) //doesn't change array ->non mutating method

console.log("sort")
arr.sort((a,b)=>b-a)
console.log(arr) //changes array -> mutating method

console.log("map")
let ans1=arr.map((num)=>num*10)
console.log(ans1)
console.log(arr) //doesn't change array ->non mutating method