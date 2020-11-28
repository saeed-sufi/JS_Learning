const movieReviews = {
  Arrival: 9.5,
  Alien: 7,
  Amadeus: 4.5,
  'Kill Bill': 7.6,
  Amelie: 9
}

let sum = 0;

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie])
}

for (let rating of Object.values(movieReviews)) {
  sum += rating;
}

for (let movie in movieReviews) {
  console.log(movie, movieReviews[movie])
}

r = Object.values(movieReviews)
console.log(typeof(r))
console.log(Object.values(movieReviews))
console.log(typeof(Object.values(movieReviews)))
console.log(sum / Object.values(movieReviews).length)
