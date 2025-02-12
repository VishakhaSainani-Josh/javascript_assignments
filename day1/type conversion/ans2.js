/*2. Do the same using switch case.  */

let age = 25;

switch (true) {
    case (age < 0):
        console.log("Invalid age")
        break
    case (age <= 12):
        console.log("Child");
        break
    case (age <= 18):
        console.log("Teen");
        break;
    default:
        console.log("Adult");
}