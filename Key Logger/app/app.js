const Keycode = document.querySelector(".keycode");
const Askycode = document.querySelector(".keycode-title");
const key = document.querySelector(".key");
const keylocation = document.querySelector(".location");
const code = document.querySelector(".code");
const which = document.querySelector(".which");

 

document.body.addEventListener("keydown", function(event){
    document.body.classList.add("key-pressed");
    event.preventDefault();
    Keycode.innerHTML = event.key
    Askycode.innerHTML = event.keyCode
    key.innerHTML = event.key
    keylocation.innerHTML = event.location
    code.innerHTML = event.code
    which.innerHTML = event.which
    console.log(event)
})