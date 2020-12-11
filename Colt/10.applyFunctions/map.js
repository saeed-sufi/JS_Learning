let b = [2, 5, 2, 6, 43, 62, 12];

const bmap = b.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

// console.log(bmap[0].value);

strs = ["asap", "lol", "lmfao"];

const str = strs.map(function (s) {
  let uppercase = s.toUpperCase().split('').join(".")

  return uppercase
});

console.log(str);

