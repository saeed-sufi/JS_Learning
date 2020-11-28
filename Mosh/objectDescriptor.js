let person = {name: "saeed"}

let objectBase = Object.getPrototypeOf(person)
let s = Object.getOwnPropertyDescriptor(objectBase,"toString")

console.log(s)