# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript(Alias JS) is a scripting/programming language. It makes possible to insert complex and
more diverse features into webpages. It is said that this is the third layer of a webpage being HTML and CSS
the first and the second respectively. 
```

## About values

### What is a primitive value?

```
Mostly it is data that can be instantly stored into variables. Programming languages usually use variables with the purpose of saving important information so it can/cant' be used at some point. Therefore this primitive values can be considered in JavaScript as: Numbers, Boolean, Strings, Chars, Null, Undefined...
```

### Which are primitive values? Explain them with at least one example for primitive.

```js
As I mentioned before...These primitive values in JavaScript can be: 
- String = "Hello World!" , "This is a catchphrase"...
- Number = 1 , 2 , 3 , 8...
- Bigint = 9007199254740991n,  BigInt("9007199254740991")...
- Boolean = true , false
- Symbol = Symbol() , Symbol("foo")
- Undefined = undefined
- Null = null
```

## About variables

### What is a variable in JS?

```
The Mozilla Developer Network states that a variable in JavaScript is a named reference to a value. In that way
the unpredicted value can be used or accessed by it's name. 
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```js
JavaScript has three diferent ways to declare a variable: 
- var -> Declaring a variable, with optional initializer. (NOT recommended)
- let -> Block-scoped, local variable and also with optional initializer. -> let y = "Hi";
- const -> Block-scoped and read-only constant. -> const x = 23;
Ways that are not recommended:
- With 'window' object. You can set global variables and attach them to the window. Pollutes global namespace 
  and can lead to naming conflicts. -> window.myVariable = "Hi";
- With 'function Constructor'. It is possible to create and make functions that are variable like. Has security
  and readability risks. -> const myFunction = new Function('a','b');

```

### Which are the most used var naming conventions in JS?

```
- Camel Case => myVariableName, userName
- Pascal Case => MyVariableName, UserName
- Snake Case => my_variable_name, user_name
- Kebab Case => my-variable-name, user-name
- Hungarian Notation: Takes a descriptive prefix of the variable use. => numMyVariableName, strUserName
- Abbreviations => btn, img, arr, sum...
- Single Letter Naming => i, j, k, x...
- Descriptive => counter, firstname, arrayofstudents...
- Boolean Prefixes => isRunning, hasPermission, shouldRender, isBreathing...
- Global Constants => MAX_SIZE, API_KEY, TOTAL_COUNT, MIN_SIZE...
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```js
- == and != //: Used to compare if two values are equal or not. `!=` stands for not equal 
Example => {
let num1 = 5; let num2 = "5";
console.log(num1 == num2); //true (values are equal after type coercion -> MDN Statement)
console.log(num1 != num2); //false (values are considered as equal)
}
- === and !== //: Used to compare if two values are from the same elemental type 
Example => {
let num1 = 5; let num2 = "5";
console.log(num1 === num2); //false (values are not equal by its type -> MDN Statement)
console.log(num1 !== num2); //true (values are not considered as equals)
}
- < and > //: Used to compare if two values are greater or less than 
Example => {
let num1 = 5; let num2 = 3;
console.log(num1 > num2); //true 5 is greater than 3
console.log(num1 < num2); //false 5 is not less than 3
}
- <= and >= //: Used to compare if two values are greater and equal or lesser and equal. 
Example => {
let num1 = 8; let num2 = 8;
console.log(num1 >= num2); //true 8 is greater than or equal to 8
console.log(num1 <= num2); //true 8 is less than or equal to 8
}
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```js
- && //Used to compare if two statements return true 
let isSunny = true; let isHot = true;
if(isSunny && isHot) return console.log("It's summer time"); 
- || //Used to compare if at least one statement returns true 
let isSunny = true; let isHot = true;
if(isSunny || isHot) return console.log("Seems like today we can go outside a bit"); 
- ! //Used negate a statment, it is called the *NOT* operator, returns true if operand is false and false if its true
let isSunny = true;
if(!isSunny) return console.log("It's cloudy today"); 
```
