pets = [
  { name: "puppy", species: "dog", age: 4 },
  { name: "fluffy", species: "cat", age: 3 },
  { name: "poo", species: "dog", age: 2 },
];

let petsNumber = pets.push({ name: "pooky", species: "dog", age: 1 });

let babyDogsNames = pets
  .filter((x) => x.species === "dog")
  .filter((x) => x.age < 3)
  .map((x) => x.name);

console.log(babyDogsNames);

let a = [4, 5, 1, 8, 4, 3, 9];
let mappedNums = a.map((x) => x > 3 && x < 8);
let filteredNums = a.filter((x) => x > 3 && x < 8);

console.log(mappedNums)
console.log(filteredNums)
