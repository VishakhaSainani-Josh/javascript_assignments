/*1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from 
inside an if block? What impact does that have?  */

function add(){
    for(let i=0;i<5;i++)
    {
        if(i==3)
        {return;}
        console.log(i)
    }
    console.log("Still inside function")
}

add()
//Statements after the return wont run, the function will end 

console.log(add()) //the return value is undefined



function add1(sum){
    for(let i=0;i<5;i++)
    {
        if(i==3)
        {return sum;}
        sum+=i
    }
    console.log("Still inside function")
}

sum=add1(5)
console.log(sum) //yes we can return a value from loop in function //outputs 8


//Yes as we saw above, we can return from inside an if block 
//when we use return the function execute will end, unlike break , if we use break the it will only end the loop execution but execute other statements of the function


function add2(sum){
    for(let i=0;i<5;i++)
    {
        if(i==3)
        {break;}
        sum+=i
    }
    console.log("Still inside function")
}

add2(3) //this will allow log of Still inside function