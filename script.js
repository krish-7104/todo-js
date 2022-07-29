// "use strict";
showNotes();
var todoArray = [];
function setValue() {
  todoTitle = document.getElementById("todoInput").value;
  if (localStorage.getItem("todoJson") == null) {
    todoArray.push(todoTitle);
    localStorage.setItem("todoJson", JSON.stringify(todoArray));
  } else {
    todoArrayStr = localStorage.getItem("todoJson");
    todoArray = JSON.parse(todoArrayStr);
    todoArray.push(todoTitle);
    localStorage.setItem("todoJson", JSON.stringify(todoArray));
  }
  document.getElementById("todoInput").value = "";
  showNotes();
}
function showNotes() {
  let todo = localStorage.getItem("todoJson");
  if (todo == null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let html = `<ol class="animate__animated animate__fadeIn">`;
  todoArray.forEach(function (element, index) {
    html += `<li >
    ${element}
    <span class="material-symbols-outlined deleteBtn" onclick = "deleteTodo(this.id)" id="${index}">clear</span>
  </li>`;
  });
  html += "</ol>";
  let todoElm = document.getElementById("displayTodo");
  if (todoArray.length != 0) {
    todoElm.innerHTML = html;
  }
}

function deleteTodo(index) {
  console.log(index);
  let todo = localStorage.getItem("todoJson");
  if (todo == null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  if (index == 0) {
    todoArray = [];
    document.getElementById(
      "displayTodo"
    ).innerHTML = `<ol class="animate__animated animate__fadeIn"<li>Add Todo Now!!</li></ol>`;
  } else {
    todoArray.splice(index, 1);
  }
  localStorage.setItem("todoJson", JSON.stringify(todoArray));
  showNotes();
}

function clearNotes() {
  if (confirm("Do You Want To Clear All Notes?")) {
    localStorage.clear();
    document.getElementById(
      "displayTodo"
    ).innerHTML = `<ol class="animate__animated animate__fadeIn"><li>Add Todo Now!!</li></ol>`;
  }
}
