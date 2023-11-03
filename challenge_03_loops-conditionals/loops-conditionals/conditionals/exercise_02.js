/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
/*It is because of the order of the  else if's statements. They are considered from top
 to bottom. The second condition evaluates as true so it prints a different console.log.
 20 > 3 so enteres that else if.
 One solution would be: 
 const age = 20;
let age = 20;
if (age < 3) {
  console.log("You're just a baby!");
} else if (age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
 */
