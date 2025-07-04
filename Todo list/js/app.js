const Addtask = document.querySelector(".open-modal-button");
const PageAddTask = document.querySelector(".modal-screen");
const Closemodal = document.querySelector(".close-modal-x");
const Input = document.querySelector(".input");
const Cancel = document.querySelector(".cancel");
const Create = document.querySelector(".create");
const TodosContainer = document.querySelector(".todos-container");

function ShowModal (){
    PageAddTask.classList.remove("hidden");
    
}
function hideModal(){
    PageAddTask.classList.add("hidden");
    Input.focus();
}
function addTodo(){
    
    const newTodoTitle = Input.value;
    let articlesElm = document.createElement("article");
    articlesElm.className = "todo";
    
    const todoDataDiv = document.createElement("div");
    todoDataDiv.className = "todo-data";
    todoDataDiv.innerHTML = `<p>${newTodoTitle}</p>`;

    const todoButtonsDiv = document.createElement("div");
    todoButtonsDiv.className = "todo-buttons";

    const removeTodoBtn = document.createElement("button");
    removeTodoBtn.innerHTML = "حذف";
    removeTodoBtn.classList = "delete";

    
    todoButtonsDiv.append(removeTodoBtn);
    articlesElm.append(todoDataDiv);
    articlesElm.append(todoButtonsDiv);
    TodosContainer.append(articlesElm);
    
    removeTodoBtn.addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove();
    });
    hideModal();
    Input.value = "";
}


Addtask.addEventListener("click", ShowModal);

Closemodal.addEventListener("click", hideModal);
Cancel.addEventListener("click", hideModal);

document.body.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideModal();
    }
});

Create.addEventListener("click", addTodo);

document.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        addTodo();
    }
});