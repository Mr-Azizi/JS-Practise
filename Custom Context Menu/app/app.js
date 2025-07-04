const ContextMenu = document.querySelector(".contextmenu");

function ShowContextMenu(event) {
    event.preventDefault();
    if (ContextMenu.style.display === "none") {
    ContextMenu.style.display = "block";
    ContextMenu.style.left = event.pageX + "px";
    ContextMenu.style.top = event.pageY + "px";
    } else {
        ContextMenu.style.display = "none";
    }
}
function HideContextMenu() {
    ContextMenu.style.display = "none";
}


document.addEventListener("contextmenu", ShowContextMenu);
document.addEventListener("click", HideContextMenu);
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        HideContextMenu();
    }
});