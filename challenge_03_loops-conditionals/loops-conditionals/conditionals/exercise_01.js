/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/
let numberToCheck = 14;
if (numberToCheck % 2 === 0) {
  console.log("It's pair! The number is: ", numberToCheck);
} else if (numberToCheck % 2 !== 0) {
  console.log("It's odd! The number is: ", numberToCheck);
}
numberToCheck = 13;
if (numberToCheck % 2 === 0) {
  console.log("It's pair! The number is: ", numberToCheck);
} else if (numberToCheck % 2 !== 0) {
  console.log("It's odd! The number is: ", numberToCheck);
}
