var taskField = document.getElementById("taskField");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitTask(taskField.value);
});

function submitTask(item) {
  if (item) {
    taskList.insertAdjacentHTML(
      "beforeend",
      `<li> ${item} <button id="deleteBtn" onClick=deleteItem(this)>Delete</button></li>`
    );
    taskList.insertAdjacentHTML()
  }
  taskField.value = "";
  taskField.focus();
}

function deleteItem(item) {
  item.parentElement.remove();
}


