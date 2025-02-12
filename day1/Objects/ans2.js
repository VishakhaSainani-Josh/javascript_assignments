/*2. Write a function filterObj that will filter out all the keys of a flat object that have objects or 
arrays using Object.keys and Object.entries. 
Example: 
let obj = { 
a:”Apple”, 
b:[“Basketball”,”Baseball”], 
c: { 
call: “cellphone”

}, 
d: “Dog” 
} 
filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
 */

let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: {
        call: "cellphone"

    },
    d: "Dog"
}

let ans = {}

function filterObject(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value !== "object" || value === null) {
            ans[key] = value;
        }
    })
}

filterObject(obj)
console.log(ans)