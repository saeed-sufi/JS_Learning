let driver = {
  name: "john",
  drive() {
    console.log(this.name + " is driving a car.");

    function insider() {
      console.log(this);
    }
    insider();
  },
};

// driver.drive();

function that() {
  console.log(this);
}

// that()
