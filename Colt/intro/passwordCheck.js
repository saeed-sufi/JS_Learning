
function isValidPassword(username, password) {
  if (
    password.length > 8 &&
    !password.includes(" ") &&
    !password.includes(username)
  ) {
    return true;
  }
  return false
}

let isValid = isValidPassword('saed', 'saeeef26i')
console.log(isValid)