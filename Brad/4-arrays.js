let myPets = [
  { name: "fluffy", age: 3 },
  { name: "kamil", age: 4, food: { favorit: "bone", hated: "orange" } },
];

console.log(myPets[1].name);

myPets.push({ name: "puppy", age: 2 });

console.log(myPets[1].food.favorit);

if (myPets[0].age) {
  console.log(myPets[0].age);
}

if (!myPets[1].name) {
  console.log("anonymous");
}
