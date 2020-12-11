
console.log(this);

function hi() {
  console.log(this);
  hey()

  function hey() {
    console.log(this);
  }
}

hi()