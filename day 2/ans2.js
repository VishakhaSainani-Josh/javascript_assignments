/*Using promises - write a function that fetches data from an API endpoint (GET
 https://reqres.in/api/users ). Log the data into the console once it is received*/

let response = await fetch('https://reqres.in/api/users')
let data = await response.json()
console.log(data)
