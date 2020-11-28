let cat = {
  name: "fluffy",
  age: 4,
  eyeColor: "blue",
  foods: {
    favorite: "Tuna",
    leastFavorite: "Oranges",
  },

  meow() {
    console.log("Meow");
  },
};

console.log(
  `${cat.name} which is ${cat.age} years old says I love ${cat.foods.favorite}`
);
