/*1. Declare a variable let age = 25;. Write a series of if else statements that will:
-> Print child to the console if age is less than equal to 12. 
-> Print teen to the console if age is between 13 and 18 (inclusive). 
-> Print adult to the console if age is above 18  */

let age = 25;

if (age < 0) {
    console.log("Invalid age")
} else if (age <= 12) {
    console.log("Child");
} else if (age <= 18) {
    console.log("Teen");
} else {
    console.log("Adult");
}
