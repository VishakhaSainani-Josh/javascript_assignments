/*3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object.
 What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object 
 declared as a let or a const variable? */


//ARRAYS

let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Modifying elements
arr1[0] = 10;  // Works
arr2[0] = 40; // Works

console.log(arr1);
console.log(arr2);

// Adding elements
arr1.push(4);  // Works
arr2.push(7); // Works

console.log(arr1);
console.log(arr2);

// Reassigning array
arr1 = [7, 8, 9]; // Works
// arr2 = [10, 11, 12];  // Doesn't work

//re-assigning a const array isn't allowed (re-assigning any const variable isn't allowed)

// a "let" object can be reassigned to a new object later in the code, while a "const" object cannot be reassigned


let obj1 = { name: "Vishakha", age: 20 };
const obj2 = { name: "Vikas", age: 30 };

// Modifying properties
obj1.age = 26;  // Works
obj2.age = 31; // Works

// Adding new properties
obj1.city = "Pune";  // Works
obj2.city = "Nashik";  // Works

// Deleting properties
delete obj1.name;  // Works
delete obj2.name; // Works

// Reassigning object
obj1 = { name: "Charlie", age: 28 }; // Works
// obj2 = { name: "David", age: 35 }; // Doesn't work
