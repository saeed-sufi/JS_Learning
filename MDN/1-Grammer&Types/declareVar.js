// The undefined value behaves as false when used in a boolean context
let myArray = [];
console.log(myArray[0]);
// if (!myArray) console.log(2);;

//  null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts
let n = null;
console.log(null * 2);

// In the case of functions, only function declarations are hoisted—but not the function expressions.
// baz(); // TypeError: baz is not a function

// var baz = function () {
//   console.log("bar2");
// };

// const must be initialized before use.
const t = 2;
// console.log(typeof t);

// Js is dynamically typed: 1- no need for type declaration 2- assign different type of data to the same identifier
// x = "str";
// console.log(typeof x);

// let a = "37" - 7;
// console.log(typeof a);
// let b = "-37" + +7;
// console.log(typeof b);

// console.log(+b);
// console.log(typeof +b);

let myList = ["home", "undefined", "school", undefined];
// console.log(myList);
console.log(myList[1]);
console.log(typeof(myList[1]));
console.log(typeof (myList[3]));


console.log(`\`` === '`');
