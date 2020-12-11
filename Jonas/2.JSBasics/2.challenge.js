function player(name, mass, height) {
  this.name = name,
    (this.mass = mass),
    (this.height = height),
    (this.bmiCalc = function () {
      return this.mass / this.height ** 2;
    });
}

let john = new player("John", 78, 1.87);
let Mark = new player("Mark", 98, 1.9);

console.log(john.bmiCalc());
