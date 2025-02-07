// What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    })

        .catch((err) => {
            console.log('Error caught in testAsyncFunction: ', err);
        });
};

testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));


/*Promise will be resolve when Math.random() chooses a number greater than 0.5. At this poin the if condition will be true and resolve will occur which means
.then will execute and the output will be Response in then block Test Resolve*/

/*When math.random() returns a number less than 0.5 at that time it will go to reject in else block and since reject is catched then the output
will be Error caught in testAsyncFunction: Test Reject and again it will execute .then as reject err is already caught before so it will also p
print Response in then block: undefined. As resolve doesny occur hence res will be undefined*/
