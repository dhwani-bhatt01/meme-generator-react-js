const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const dltBtn = document.querySelectorAll(".dlt-btn");
// Add todo

const addTodo = (evt) => {
  evt.preventDefault();
  // Creating a DIV element
  const newTodoDiv = document.createElement("div");
  
  // Creating a DEL BTN element
  const newTodoDel = document.createElement("button");
  newTodoDel.innerText = "Delete Todo";
  newTodoDel.classList.add("dlt-btn")

  // Creating a LI element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  // Appending LI nd DEL BTN to DIV
  newTodoDiv.appendChild(newTodo);
  newTodoDiv.appendChild(newTodoDel);

  // Appending DIV to UL
  todoList.appendChild(newTodoDiv)

  todoInput.value = "";
}

// Event listeners
todoBtn.addEventListener("click", addTodo);

//Delete todo
const dltTodo = (e) => {
let dlt = e.target.newTodo;
newTodo.remove();
} 

dltBtn.addEventListener("click", dltTodo);