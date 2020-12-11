const goal = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() *10)
let guessArr = new Array();
let i = 0;

console.log(`Goal to reach: ${goal}`)

while (guess !== goal) {
  guess = Math.floor(Math.random() * 10)
  guessArr[i] = guess
  i++;
  console.log(`guess = ${guess}`)
}

for (let elm of guessArr) {
  console.log(elm)
}

