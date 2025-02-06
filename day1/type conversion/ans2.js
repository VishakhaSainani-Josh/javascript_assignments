/*2. Do the same using switch case.  */

let age = 25;

switch (true) {
    case (age <= 12):
        console.log("Child");
        break
    case (age >= 13 && age <= 18):
        console.log("Teen");
        break;
    default:
        console.log("Adult");
}