const createButton = document.querySelector(".create-button");
const modalNote = document.querySelector(".modal-screen");
const closeXBtn = document.querySelector(".close-x-btn");
const closeBtn = document.querySelector(".close");
const colorPic = document.querySelectorAll(".color-box");
const notesContainer = document.querySelector(".notes-container");
const textArea = document.querySelector("textarea");
const addNoteBtn = document.querySelector(".continue");

let mainColor ;

function createNote() {
    modalNote.classList.remove("hidden");
}
function closeNote() {
    modalNote.classList.add("hidden");
}
function addNote(){
    const note = textArea.value;

    const articleElm = document.createElement("article");
    articleElm.classList.add("note");
    articleElm.style.backgroundColor = mainColor;

    const noteText = document.createElement("p");
    noteText.classList.add("note-text");
    noteText.textContent = note;

    const divElm = document.createElement("div");
    const closeBtn = document.createElement("i");
    closeBtn.classList.add("fa-solid", "fa-trash", "delete");

    divElm.appendChild(closeBtn);
    articleElm.appendChild(noteText);
    articleElm.appendChild(divElm);
    notesContainer.appendChild(articleElm);
    textArea.value = "";
    closeNote();

    closeBtn.addEventListener("click", function() {
        articleElm.remove();
    });
}

colorPic.forEach(function(color) {
    color.addEventListener("click", function(event){
        mainColor = event.target.dataset.color;
        event.target.classList.add("selected");
        colorPic.forEach(function(otherColor) {
            if (otherColor !== event.target) {
                otherColor.classList.remove("selected");
            }
        });
    })
})

createButton.addEventListener("click", createNote);
closeXBtn.addEventListener("click", closeNote);
closeBtn.addEventListener("click", closeNote);
document.body.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeNote();
    }
})
addNoteBtn.addEventListener("click", addNote);
