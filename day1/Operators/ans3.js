/*3. Do you think JSON.stringify would work for arrays as well? What about nested objects? 
What happens if we pass numbers, strings, undefined, null to JSON.stringify? 4. What happens 
if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs 
in the program? Will other parts of the code execute correctly after that? */


const obj = { name: "Vish", age: 30, address: { city: "Indore", pincode: 425401 } };
const myJSON = JSON.stringify(obj);
console.log(myJSON);

let arr = [1, 2, 3, 4]
const objJSON = JSON.stringify(arr)
console.log(objJSON);

console.log(JSON.stringify(8));
console.log(JSON.stringify("8"));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(null));


const obj1 = '{"name":"vishi",age:20}' //an invalid json
console.log(JSON.parse(obj1))

//if we pass invalid json string to json parse it will throw an error
//SyntaxError: Expected double-quoted property name in JSON at position 16 (line 1 column 17)
//It will crash the program and wont allow next lines to execute

//but we can still pass number or strings

console.log(JSON.parse(9)) //this is allowed

