const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`)
}

for (let w of words1) {
  console.log(w)
}

for (let w in words1) {
  console.log(w)
}
