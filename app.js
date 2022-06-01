//Cached elements

const enterToDO = document.getElementById("enter-todo")
const submitButton = document.getElementById("submit-button")
const todoList = document.getElementById("todo-list")

//Event listeners

submitButton.addEventListener('click', function(evt){
  if(enterToDO.value === '') return
  const  newToDo = document.createElement('Li')
  newToDo.textContent = todoInput.value
  todoList.appendChild(newTodo)
  enterToDO.value = ''
})

todoList.addEventListener('click', function(evt){
const parentNode = event.target.pareentNode
parentNode.removeChild(event.target)
})