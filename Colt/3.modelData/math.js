function getRandomNumber(max) {
  let a = Math.floor(Math.random() * max);
  return a;
}


function getRandomNumberInRange(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

console.log(getRandomNumberInRange(4,10));