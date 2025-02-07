/*Using promises - write a function that fetches data from an API endpoint (GET
 https://reqres.in/api/users ). Log the data into the console once it is received*/


async function f(){
    let p=new Promise((resolve)=>{
        return resolve(fetch('https://reqres.in/api/users'))
    })

    let data= await p 
    console.log( await data.json())
}

f()
