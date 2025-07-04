const loginButton = document.querySelector('.login-button');
const modalScreen = document.querySelector('.modal-screen');
const closeButton = document.querySelector('.close-x-btn');
const close = document.querySelector('.close');
const AcceseptBtn = document.querySelector(".continue")
 
function hidenModal() {
    modalScreen.classList.add('hidden');
}

loginButton.addEventListener('click', function() {
    modalScreen.classList.remove('hidden');
});

closeButton.addEventListener('click', hidenModal);
close.addEventListener('click', hidenModal);
AcceseptBtn.addEventListener('click', hidenModal);

document.body.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hidenModal();
    }
})