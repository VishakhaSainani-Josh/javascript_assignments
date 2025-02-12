/*3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into 
an array till the arraySize is reached.  */

let arraySize = 25
let arr = []

for (let i = 1; i <=arraySize; i++) {
    arr.push(i)
}

console.log(arr)