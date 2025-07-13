const openModalBtn = document.querySelector('.open-modal-button');
const cancelBtn = document.querySelector('.cancel');
const addTodoBtn = document.querySelector('.create');
const cancelXBtn = document.querySelector('.cancel-X');
const modalScreen = document.querySelector('.modal-screen');
const textInput = document.querySelector('.input');
const todosContainer = document.querySelector('.todos-container');
const sortBtns = document.querySelectorAll(".sort-menu button");
const sortTypeElm = document.querySelector(".sort-type");

let todos = [];

function showModal () {
  modalScreen.classList.remove('hidden');

  setTimeout(() => {
    textInput.focus();
  }, 50);
}

function hideModal () {
  modalScreen.classList.add('hidden');
}

function addTodo () {
  const todoTitle = textInput.value;

  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    title: todoTitle,
    isCompleted: false,
  }
  todos.push(newTodo);
  textInput.value = '';
  seveTodos(todos);
  showTodos(todos);
  hideModal();
  
}

function seveTodos(todoArray) {
  localStorage.setItem('todos', JSON.stringify(todoArray));
}

function showTodos(showTodos) {
  todosContainer.innerHTML = "";
  if(showTodos.length){
    showTodos.forEach(function(todo){
      todosContainer.insertAdjacentHTML('beforeend', 
        `
          <article class="todo ${todo.isCompleted ? "complete" : ""}">
            <div class="todo-data">
              <div class="checkbox" onclick="completed(${todo.id})">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p class="todo-title">${todo.title}</p>
              </div>
            </div>
            <div class="todo-buttons">
              <button class="delete" onclick="removeTodo(${todo.id})">حذف</button>
              <button class="complete" onclick="completed(${todo.id})">تکمیل</button>
            </div>
          </article>
        `
      )
    });
  }else{
    todosContainer.innerHTML = `<h1 style="text-align: center">تودویی یافت نشد</h1>`
  }
}

function removeTodo(todoId){
  const mainTodoIndex = todos.findIndex(function(todo){ 
    return todo.id === todoId ;
  });
  todos.splice(mainTodoIndex, 1);
  showTodos(todos);
  seveTodos(todos)
}

function completed(todoId){
  const mainTodoIndex = todos.findIndex(function(todo){ 
    return todo.id === todoId ;
  });
  todos[mainTodoIndex].isCompleted = true;
  seveTodos(todos);
  showTodos(todos);
}

function getTodosInLocal (){
  const todosList = JSON.parse(localStorage.getItem("todos"));
  if(todosList){
    todos = todosList;
  }
  showTodos(todos);
}

function todosSortHandler(event){
  const sortType = event.target.value;
  const sortTitle = event.target.innerHTML;

  sortTypeElm.innerHTML = sortTitle;
  switch (sortType) {
    case "completed":{
      const completedTodos = todos.filter(function(todo){
        return todo.isCompleted === true;
      })
      showTodos(completedTodos);
      break;
    }
    case "uncompleted":{
      const uncompletedTodos = todos.filter((todo) => {
        return todo.isCompleted === false;
      })
      showTodos(uncompletedTodos);
      break;
    }
    default:{
      showTodos(todos);
      break;
    }
  }
}

openModalBtn.addEventListener('click',showModal);
cancelBtn.addEventListener("click", hideModal);
cancelXBtn.addEventListener("click", hideModal);
addTodoBtn.addEventListener('click', addTodo);
sortBtns.forEach(function(sortBtn){
  sortBtn.addEventListener('click', todosSortHandler);
})
