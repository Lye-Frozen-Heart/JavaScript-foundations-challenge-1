/*
    What would each of these lines of code do:
    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo");
false && console.log("moo moo?");
true || console.log("hello friend");
false || console.log("bye friend");
/*
 * true && console.log("moo"); --> Evaluates always with && if the expression returns true,
 * so this one returns true and executes the console.log.
 * false && console.log("moo moo?"); --> As said in the first one it considers if the
 * condition returns true, as false its the first value it does not print anything.
 * With || it's pretty different, it does consider if one of them is true.
 * true || console.log("hello friend"); --> It returns true in the first value it does not
 * arrive to the second statement.
 * false || console.log("bye friend"); --> The first value returns false so arrives at
 * the second statement and prints the value.
 */
console.log("Exc 04:---> finished");