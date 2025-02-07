//Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:
// const func = async () => {
// console.log("Printing before")
// //Call your function here eg. sleep(3000)
// console.log("Printing after")
// }


const ansFn=new Promise((resolve)=>{
    setTimeout(resolve,3000)
})

const func = async () => {
console.log("Printing before")
await ansFn.then()
console.log("Printing after")
}


func()