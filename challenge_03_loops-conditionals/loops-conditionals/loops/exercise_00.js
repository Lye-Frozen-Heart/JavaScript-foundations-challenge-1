/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/
for (let actualNumber = 10; actualNumber <= 40; actualNumber++) {
  if (actualNumber % 2 === 0) console.log("Pair: ", actualNumber);
}
for (let actualNumber = 10; actualNumber <= 40; actualNumber++) {
  if (actualNumber % 2 !== 1) console.log("Odd: ", actualNumber);
}
/**
 * A better solution: 
 * for (let i = 10; i <= 40; i++) {
 * if (i % 2 == 0) console.log("Pair: ", i);
  if (i % 2 == 1) console.log("Odd: ", i);
  }
 */
