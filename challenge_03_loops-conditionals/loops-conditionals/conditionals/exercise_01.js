/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

const numberChecker = function (number) {
  let pairOrOdd =
    number % 2 !== 0
      ? `The number: ${number}, its odd!`
      : `The number: ${number}, its pair!`;
  return pairOrOdd;
};

console.log(numberChecker(14));

console.log(numberChecker(13));

console.log(numberChecker(3));

console.log(numberChecker(true)); //Doesnt check type
