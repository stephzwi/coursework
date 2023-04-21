// truthy for booleans
//If the value is truthy, print true;
// if the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
//"The null value is falsy";
//"undefined is falsy";
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";
//Values to test:

//"I am a string"	true
//false	"The boolean value false is falsy"
//null	"The null value is falsy"
//undefined	"undefined is falsy"
//0	"The number 0 is falsy (the only falsy number)"
//""	"The empty string is falsy (the only falsy string)"\\

let iamastring = String

if ("I am a string") {
    console.log("truthy statement");

} else {
    console.log("false statement")
};

let this9 = false

if (this9) {
    console.log("the boolean value is truthy");
} else {
   console.log("the boolean value is false")
};

let nulll = false

if (nulll) {
    console.log("The null value is truthy");
} else {
   console.log("The null value is falsy")
};


if (0 === Number) {
    console.log("The number 0 is falsy (the only true number)");
} else {
   console.log("The number 0 is falsy (the only falsy number)")
};

if ("" === String){
    console.log("this is an actual string");
} else {
    console.log("The empty string is falsy (the only falsy string)")
};

//Using if/else if/else statements, JavaScript code in a 
//script tag that takes the sum of two 
//numbers and prints the corresponding result:

//sum + " is a negative number";
//sum + " is larger than 0";

let a = 50
let b = 51
console.log(a + b)

if (101){
    console.log("101 is greater than 100");
} else {
    console.log("it does not equal 101")
};    

let c = 99
let d = -2
console.log(c + d)
if  (97){
    console.log("97 is greater than 0");
} else {
    console.log("this aint 97")
};    

let e = 0
let f = 101
console.log(e + f)
if  (101){
    console.log("101 is greater than 100");
} else {
    console.log("this dont equal 101")
};    

let g = 500
let h = -500
console.log(g + h)
if  (0){
    console.log("0 is equal to 0");
} else {
    console.log("math correctly")
};    

let i = -1000
let j = 0
console.log(i + j)
if  (-1000){
    console.log("-1000 is a negative number");
} else {
    console.log("this aint a real number")
};    

let k = -5
let l = 0
console.log(k + l)
if  (-5){
    console.log("-5 is a negative number");
} else {
    console.log("this aint a real number")
};    

//Using if/else statements, JavaScript code in a script tag that prints true 
//if both parameters are greater or equal to 5.

let num1 = 5
let num2 = 6
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};

num1 = 10
num2 = 11
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};
  
num1 = 0
num2 = 0
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};

num1 = 1000
num2 = -1000
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};

num1 = 6
num2 = 4
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};

num1 = 5
num2 = 5
if (num1 && num2 >= 5){
    console.log("true");
} else {
    console.log("false")
};

//

param1a = "cat"
param1b = "cat"
param2a = 6
param2b ="6"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    

param1A = "five"
param1b =  5
param2a = "dog"
param2b = "dawg"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    

param1a = 0
param1b = false
param2a = "horse"
param2b = "horse"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    

param1a = "eight"
param1b = "eight"
param2a = "ate"
param2b = "ate"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    

param1a = 11
param1b = "eleven"
param2a = "four"
param2b = "for"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    

param1a = "cake"
param1b = "cake"
param2a = "pie"
param2b = "pie"

if  (param1a === param1b || param2a === param2b){
    console.log("true g");
} else {
    console.log("falsey")
};    
