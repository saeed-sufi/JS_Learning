function map(f, arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = f(arr[i]);
  }

  return resultArr;
}

const cube = function(x) {
  return x*x*x
}

let arr = [1,2,3]
const cubes = map(cube, arr)
console.log(cubes);
console.log(arr);

console.log(map);
map.a