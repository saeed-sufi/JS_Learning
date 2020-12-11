user = {
  name: "saeed",
  age: 34
}

user.isAdmin = true;

console.log(user);

delete user.isAdmin

console.log(user);

user['سعید'] = 'سعید'
user['key'] = 83305018
user['$'] = 'jquery'

let $ = 'old framework'
user['$'] = $

console.log(user);

console.log('age' in user);
console.log(user.age === undefined);
console.log(user['_'] === undefined);


for (let prop in user) {
  console.log(prop);
  console.log(user[prop]);
}