//What will be printed to the console?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

/* Promise will be resolve when Math.random() chooses a number greater than 0.5. At this poin the if condition will be true and resolve will occur which means
.then will execute and the output will be Response in then block Test Resolve*/



/*When math.random() returns a number less than 0.5 at that time it will go to reject in else block and since reject is catched then the output
will be Error caught in testAsyncFunction: Test Reject and then the catch block also throws a new error which is forced error so this error 
will be caught by the testAsyncFunction.catch(err) and it will also output Error in catch block error forced error.
Here as an error is thrown it doesn't execute .then it will go to catch block*/


