// What will be printed to the console?
const testAsyncFunction = () => {
    return Promise.reject('Test static reject');
};

testAsyncFunction()
    .then((res) => {
        console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));


/*Here since Promise is executing the reject hence the reject error is caught by catch block and 
Error in catch block Test static reject is printed to the console*/