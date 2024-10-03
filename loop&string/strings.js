//strings means sequence of characters

//Strings are for storing text. Strings are written with quotes.
// Using Quotes A JavaScript string is zero or more characters written inside quotes.

let firstname="pri";
console.log(typeof(firstname));//string

let a="vivek";
let b="PRI";
console.log(a.length);//5
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(`${a}${b}`);//vivekPRI

//subString

let clas="anurag";
console.log(clas.substring(2));//urag
console.log(clas.substring(1,4));//nur

//split()

let sentance="This is my laptop";
let  covStr =sentance.split(' ');//[ 'This', 'is', 'my', 'laptop' ]
console.log(covStr);

console.log(covStr.join(''));//Thisismylaptop
console.log(covStr.join('*'));//This*is*my*laptop











