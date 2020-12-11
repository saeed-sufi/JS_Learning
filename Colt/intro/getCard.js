function getCard() {
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "1",
    "0",
    "J",
    "Q",
    "K",
    "A",
  ];

  let value = getRandomElement(values)
  let suit = getRandomElement(suits)

  return {
    value: value,
    suit: suit,
  };

}

function getRandomElement(arr) {
  const elm = Math.floor(Math.random() * arr.length)
  return arr[elm];
}

console.log(getCard());
// console.log(Math.floor(Math.random()*15))
