/*
    1. Create a for loop that loops while index is less or equal than 10.
    2. Each loop:
        * create a new random number between 1 and 10 (hint: check documentation regarding Math.floor and Math.random methods)
        * evaluate if random number is greater than 5
        * if it is equal or greater than 5 print "Logged In!"
        * if it is less than 5 print "Logged Out!"
*/
for (let index = 0; index <= 10; index++) {
  let randomNumb = Math.floor(Math.random() * 10) + 1;
  if (randomNumb >= 5) console.log("Logged In!");
  else console.log("Logged Out!");
}
