/*2. Take a function that accepts a function as a parameter (also known as callback function). function test(callback){ 
callback(); 
} 
function callbackFunc(){ 
console.log(“Calling the callback function”) 
return 5; 
} 
Explore the following cases - what is printed in the console, and what gets returned: 
○ test(callbackFunc) 
○ test(callbackFunc()) 
○ test(() => callbackFunc()) 
○ What happens when you return callback() from the test function? ○ What happens when you return callback from the test function? */



function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function")
    return 5;
}

test(callbackFunc)  //Calling the callback function
// test(callbackFunc()) //This returns error
test(() => callbackFunc()) //Calling the callback function


function test1(callback1) {
    return callback1();
}

function callbackFunc1() {
    console.log("Calling the callback function")
    return 5;
}

console.log(test1(callbackFunc1)) //outputs : calling the callack function and 5 on next line
// console.log(test1(callbackFunc1())) //This returns error
console.log(test1(() => callbackFunc1())) //outputs : calling the callack function and 5 on next line