/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/
const tenthLoop = function (lowerNumber, higherNumber) {
  for (let counter = lowerNumber; counter < higherNumber; counter++) {
    if (counter == 50) console.log("Half way there!");
    else if (counter === 100) console.log("You made it!");
    else if (counter % 10 === 0) console.log("Checkpoint! ", counter);
  }
  console.log("All, done!");
};
console.log("###############################");
console.log("--- Is TENTH loop Program ---");

const firstValue = 1;
const lastValue = 100;

tenthLoop(firstValue, lastValue);

console.log("--- Is TENTH loop complete ---");
