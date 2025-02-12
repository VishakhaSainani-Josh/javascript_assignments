/*Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
the data has been received in the fetch.*/

function myfn() {
    return new Promise((resolve) => {
        fetch('https://reqres.in/api/users').then(result => result.json().then(ans => {
            setTimeout(() => resolve(ans), 2000)
        }))
    })
}

myfn().then((data) => { console.log(data) })




