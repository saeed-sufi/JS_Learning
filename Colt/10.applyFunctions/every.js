const ans = [12, 5, 8, 130, 44].every(function (e) {
  return e > 4;
});

let ans1 = [12, 5, 8, 130, 44].every((n) => n > 10);

function isGreaterThanX(n, index, thst, pen) {
  // console.log(pen);
  // console.log(thst);
  // console.log(index);
  return n > 4;
}

let ans3 = [12, 5, 8, 130, 44].every(isGreaterThanX);

const isBelowThreshold = (element) => element <= 30;

let ans4 = [12, 5, 8, 130, 44].every(isBelowThreshold);

let ans5 = ["no"].every(isBelowThreshold);
// console.log(null < -1);

// console.log(ans3)

// Modifying items
let arr = [1, 2, 3, 4,5,6];
const ans6 = arr.every((elm, index, array) => {
  array[index + 1] -= 1;
  // console.log(`[${array}][${index}] = ${array[index]}`);
  return elm <= 2;
});

// console.log(arr)


// Deleting items
let arr1 = [1, 2, 3, 4];
const ans7 = arr1.every((elm, index, array) => {
  array.pop();
  console.log(`[${array}][${index}] -> ${array[index]}`)
  return elm < 2
});

console.log(ans7);
console.log(arr1);