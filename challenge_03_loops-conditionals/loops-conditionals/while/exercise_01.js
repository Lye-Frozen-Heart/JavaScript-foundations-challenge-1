/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/
let incrementalEven = 10;
while (incrementalEven <= 40) {
  if (incrementalEven % 2 === 0) console.log("Even: ", incrementalEven);
  incrementalEven++;
}
let incrementalOdd = 10;
while (incrementalOdd <= 40) {
  if (incrementalOdd % 2 === 1) console.log("Odd: ", incrementalOdd);
  incrementalOdd++;
}
