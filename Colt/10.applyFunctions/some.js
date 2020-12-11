const fruits = ['apple', 'banana', 'mango', 'guava']

function checkFruitAvailability(fruitsArr, fruitName) {
  return fruitsArr.some(fruit => fruit === fruitName)
}

console.log(checkFruitAvailability(fruits, 'mang'));
