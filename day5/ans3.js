/* Share a minimum four differentiation between regular function and arrow functions with one examples */

//regular function requires function keyword
//arrow function does not require function keyword
function regularfn1() {
    console.log("In regular fn")
}
regularfn1()

const arrowfn1 = () => {
    console.log("In arrow fn")
}
arrowfn1()

//In regular function if we want to return something, we need to use the return keyword compulsorily
//In arrow function we can use or omit the return statement
function regularfn2(a, b) {
    return a + b
}
console.log(regularfn2(2, 3))

const arrowfn2 = (a, b) => a + b
console.log(arrowfn2(2, 3))

//In regular function, this refers to the context where the function is called
//While in an arrow function, this refers to the context where the function is defined
function regularfn3() {
    console.log(this)
}
regularfn3()

const arrowfn3 = () => {
    console.log(this)
}
arrowfn3()


//To access arguments of a regular function we can use the arguments object
//In arrow functions, the argument object is not available, we can use the spread operator instead
function regularfn4(a, b) {
    console.log(arguments)
}
regularfn4(1, 2)

const myfn4 = (...args) => [
    console.log(args)
]
myfn4(1, 2)

