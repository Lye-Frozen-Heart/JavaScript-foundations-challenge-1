/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

const isOddOrEven = function (lowThreshold, highThreshhold) {
  for (let index = lowThreshold; index <= highThreshhold; index++) {
    if (index % 2 == 0) console.log("Pair: ", index);
    if (index % 2 == 1) console.log("Odd: ", index);
  }
};
console.log("###############################");
console.log("--- Is EVEN or ODD loop Program ---");

const startAt = 10;
const endAt = 40;

isOddOrEven(startAt, endAt);

console.log("--- Is EVEN or ODD loop complete ---");
