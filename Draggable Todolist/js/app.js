const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-screen");
const createTodoBtn = document.querySelector(".continue");
const modalCloseBtn = document.querySelector(".close");
const todoInput = document.querySelector(".todo-input");
const todoSection = document.querySelector(".status-section.default");
const doingSection = document.querySelector(".status-section.in-progress");
const completeSection = document.querySelector(".status-section.complete");
const spanSection = document.querySelector(".status-section.trash");
const closeXBtn = document.querySelector(".close-X-btn");

function showAddTodoModal() {
  modal.classList.remove("hidden");
  setTimeout(() => {
    todoInput.focus();
  }, 50);
}

function hideAddTodoModal() {
  modal.classList.add("hidden");
}

function addTodo() {
  todoSection.insertAdjacentHTML("beforeend", 
    `
    <article id="todo-${Math.floor(Math.random()*100)}" class="todo" draggable="true">
      <p>${todoInput.value}</p>
    </article>  
    `
  )
  todoInput.value = "";
  hideAddTodoModal();
}

function dragStartHandler(event) {
  event.dataTransfer.setData("ElmId", event.target.id);
}

function dragOverHandler(event) {
  event.preventDefault();
}

function dropHandler(event) {
  const elmId = event.dataTransfer.getData('ElmId');
  console.log(elmId);
  const draggedElement = document.getElementById(elmId);
  
  event.target.append(draggedElement);

}

openModalBtn.addEventListener("click", showAddTodoModal);
createTodoBtn.addEventListener("click", addTodo);
modalCloseBtn.addEventListener("click", hideAddTodoModal);
closeXBtn.addEventListener("click", hideAddTodoModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideAddTodoModal();
  }
});
document.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    if (!modal.classList.contains("hidden")) {
      addTodo();
    }
  }
});

todoSection.addEventListener("dragstart", dragStartHandler);
doingSection.addEventListener("dragstart", dragStartHandler);
completeSection.addEventListener("dragstart", dragStartHandler);
spanSection.addEventListener("dragstart", dragStartHandler);

todoSection.addEventListener("dragover", dragOverHandler);
doingSection.addEventListener("dragover", dragOverHandler);
completeSection.addEventListener("dragover", dragOverHandler);
spanSection.addEventListener("dragover", dragOverHandler);

todoSection.addEventListener("drop", dropHandler);
doingSection.addEventListener("drop", dropHandler);
completeSection.addEventListener("drop", dropHandler);
spanSection.addEventListener("drop", dropHandler);