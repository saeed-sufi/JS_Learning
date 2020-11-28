animals = ["cat", "dog", "hen", "cow"];

// animals.forEach(element => {
//   console.log("hi " + element)
// });

animals.forEach(saySthNice);

function saySthNice(x, pee) {
  let foo = pee;
  console.log(x + " is a " + foo + " animal.");
}
