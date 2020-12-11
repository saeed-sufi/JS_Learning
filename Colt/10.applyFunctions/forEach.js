let a = [1,3,,4]

function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

a.forEach(logArrayElements)

