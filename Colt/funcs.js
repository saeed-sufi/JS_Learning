function add(a, b) {
  return ["s" +a+b, a*b]
}

total = add(2, 3)[0]
mult = add(2,3)[1]

console.log(total)
console.log(mult)