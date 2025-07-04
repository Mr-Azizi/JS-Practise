const Remaining = document.querySelector(".max-length");
const Input = document.querySelector("input");
const InputMaxLength = +Input.getAttribute("maxlength");

function updateMaxLength() {
    Remaining.innerHTML = InputMaxLength - Input.value.length;
}

Input.addEventListener("keyup", updateMaxLength);