"use strict";
let todoArray = [];
let todoStr = localStorage.getItem("todoList");
todoArray = JSON.parse(todoStr);
showTodo();

document
  .getElementById("todoInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("addBtn").click();
    }
  });

function showPending() {
  let show = document.getElementById("pendingList");
  show.innerHTML = `You Have ${todoArray.length} Pending Tasks`;
}

function showTodo(flag) {
  if (flag == 1 && todoArray.length == 0) {
    document.getElementById(
      "todoShowView"
    ).innerHTML = `<div class="noTodoView" id="noTodoView">
      <img src="noTodoImage.png" alt="" srcset="" />
      <p>Add Task In Your Todo List Now!</p>
      </div>`;
  } else {
    let todoStr = localStorage.getItem("todoList");
    if (todoStr === null || todoArray.length == 0) {
      todoArray = [];
      document.getElementById(
        "todoShowView"
      ).innerHTML = `<div class="noTodoView" id="noTodoView">
        <img src="noTodoImage.png" alt="" srcset="" />
        <p>Add Task In Your Todo List Now!</p>
        </div>`;
    } else {
      todoArray = JSON.parse(todoStr);
      let html = "";
      todoArray.forEach((element, index) => {
        html += `<div class="card">
          <p class="todoValue" id="todoValue${index}">${element}</p>
          <button class="deleteBtn Todobtns" id="delete${index}" onclick="deleteTodoBtn(this.id)">
            <span class="material-symbols-outlined todoIcons" > delete </span>
          </button>
        </div>`;
      });
      document.getElementById("todoShowView").innerHTML = html;
    }
  }
  showPending();
}
function addTodo() {
  let inputTodo = document.getElementById("todoInput").value;
  if (inputTodo != "") {
    todoArray.push(inputTodo);
    localStorage.setItem("todoList", JSON.stringify(todoArray));
    showTodo();
    inputTodo = document.getElementById("todoInput").value = "";
  } else {
    console.log("Kuch To Likh Do Yaar");
  }
}
function deleteTodoBtn(id) {
  let onlyId = id.slice(6);
  todoArray.splice(onlyId, 1);
  localStorage.setItem("todoList", JSON.stringify(todoArray));
  showTodo(1);
}
function todoClear() {
  if (confirm("Are You Sure, You Want To Clear All Todos?")) {
    localStorage.clear("todoList");
    showTodo(1);
  }
}
