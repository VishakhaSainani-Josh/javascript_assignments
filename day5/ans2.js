/*Implement a Fibonacci sequence generator using a generator function in JavaScript. */

function* generator() {
    let fib0 = 0
    let fib1 = 1
    while (true) {
        let fibN = fib0
        fib0 = fib1
        fib1 = fibN + fib0
        yield fibN
    }
}

const ans = generator()
for (let i = 0; i <= 5; i++) {
    console.log(ans.next().value)
}

