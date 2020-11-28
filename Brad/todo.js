let ourForm = document.getElementById("ourForm");
let itemField = document.getElementById("itemField");
let itemList = document.getElementById("itemList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(itemField.value);
});

function createItem(item) {
  itemList.insertAdjacentHTML(
    "beforeend",
    `<li> ${item} <button onClick = deleteItem(this)> Delete</botton></li>`
  );
  itemField.value = "";
  itemField.focus();
}

function deleteItem(item) {
  item.parentElement.remove();
}

