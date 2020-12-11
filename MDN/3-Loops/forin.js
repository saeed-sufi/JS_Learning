let car = {
  make: "Kia",
  model: "picanto",
  greet(m) {
    console.log("Kia is awesome");
    
  }
};

function propDumper(obj, objName) {
  let result = "";
  for (let prop in obj) {
    result += objName + "." + prop + "=" + obj[prop] + "\n";
  }
  return result;
}

console.log(propDumper(car, "car"));

// const forin = ["car", "animal", "tv"]

// for (let prop in forin) {
//   console.log(prop);
// }
