let fruits = ["orange", "banana", "kivi", "apple", "watermelon", "pineapple"];

// console.log(fruits['0']);

fruits.forEach((fruit, index, arr) => {
  // arr.pop()
  // console.log(arr)
  // console.log(index, fruit);
});

let removedFruit = fruits.splice(0, 1); //mutates the array
console.log(removedFruit);

console.log(fruits);
let shallowCopy = fruits.slice(0, -2);
console.log(shallowCopy);

console.log(fruits["2"]);
console.log(fruits["02"]);

fruits[9] = "peach";
console.log(fruits);
console.log(fruits.length);
console.log(Object.keys(fruits));
console.log(fruits[5]);

fruits.length = 3;
console.log(fruits);

let newArr = Array.of(["horse", "dog"], "hen");
console.log(newArr);

let filteredArr = fruits.filter((f) => f.length <= 5);
console.log(filteredArr);

let findArrElm = fruits.find((f) => f.length <= 5);
console.log(findArrElm);


ط = 5;
console.log(ط);

let msgArray = []
msgArray[0] = "1"
msgArray[9] = 99
console.log(msgArray.length);
console.log(msgArray);