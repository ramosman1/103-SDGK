/*
alert("hello world!");
prompt("Enter your name:");
console.log("This is a message");
console.warn("this is a warning");
console.error("This is an error message");
*/


/////////////////////////////////////////
// Variable declaration and syntax
// var is not used anyomore, let should
// should be used. 
//
// const should be used for constants, 
// not variables.
////////////////////////////////////////
var x;
x=10;
x=20;

var username = "Kyle";
let userAge = 99;

document.writeln(x);
document.writeln(`
<p>The user name is: ${username}, and the age is ${userAge}</p>`);



userAge = 10000;
console.log(userAge);


const TAXES = 11;
console.log(TAXES);