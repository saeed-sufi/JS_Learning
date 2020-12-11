function avgArr(arr) {
  let sum = 0;
  let ave = 0;

  // for (let elm of arr) {
  //   sum += elm;
  // }

  arr.forEach(elm => {
    sum += elm;
  })

  ave = sum / arr.length;
  return ave;
}

let average = avgArr([0, 5, 43]);

console.log(average);
