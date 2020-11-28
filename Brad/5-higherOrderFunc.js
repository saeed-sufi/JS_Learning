function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);

console.log(doubleMe(20));