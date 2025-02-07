
/*Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
the data has been received in the fetch.
Use async await for above*/

function myfn() {
    return new Promise(async (resolve) => {
        const data = await fetch('https://reqres.in/api/users')
        const response = await data.json()

        setTimeout(() => {
            resolve(response)
        }, 2000)
    })
}

myfn().then(data => console.log(data))

