let createPet = function (name) {
  return {
    setName: function (setName) {
      return (name = setName);
    },

    getName: function () {
      return name;
    },
  };
};

// let pet = createPet("Pete")
// console.log(pet.getName());
// pet.setName("Vivie")
// console.log(pet.getName());

function myConcat(separator) {
  var result = ""; // initialize list
  var i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat("", ["red", "orange", "blue"]));
