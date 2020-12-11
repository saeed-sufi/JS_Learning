
function numOfSelectedOptions(selectObj) {
  
  let numSelectedOptions = 0;

  for (let i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].selected) {
      numSelectedOptions++;
    }
  }

  return numSelectedOptions;
}

let btn = document.getElementById("btn")

btn.addEventListener("click", function () {
  alert(numOfSelectedOptions(document.selectForm.musicTypes))
})