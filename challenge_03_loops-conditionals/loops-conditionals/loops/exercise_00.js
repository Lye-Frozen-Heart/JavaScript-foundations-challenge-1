/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/
for (let index = 10; index <= 40; index++) {
  if (index % 2 == 0) console.log("Pair: ", index);
  if (index % 2 == 1) console.log("Odd: ", index);
}
