typeof 42 === "number";
console.log(typeof(42) === 'number');
console.log(typeof Number("shoe") === "number");

// typeof always returns a string
console.log(typeof (typeof 1));

console.log(typeof !!1);
console.log(typeof function () {});
console.log(typeof class C { });
console.log(typeof null);

// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
let func = new Function()
console.log(typeof (func));

console.log(typeof(new Array()));