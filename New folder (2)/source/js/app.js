const UsernameElement = document.querySelector(".username");
const PasswordElement = document.querySelector(".password");
const LoginButtonElement = document.querySelector(".login-button");
const UsernameElementMessage = document.querySelector(".username-message");
const PasswordMessage = document.querySelector(".password-message");
const SuccessModal = document.querySelector(".modal-screen");
const ModalButton = document.querySelector(".modal-button");
const Modalimage = document.querySelector("#final-img");
const Modaltext = document.querySelector(".modal-text");

const Username = UsernameElement.addEventListener("keyup",function(){
  if(UsernameElement.value.length > 3){
    UsernameElementMessage.classList.remove("hidden");
    UsernameElementMessage.classList.remove("unsuccess");
    UsernameElementMessage.classList.add("success");
    UsernameElementMessage.innerHTML = "نام کاربری صحیح می باشد";
  }else{
    UsernameElementMessage.classList.remove("hidden");
    UsernameElementMessage.classList.remove("success");
    UsernameElementMessage.classList.add("unsuccess");
    UsernameElementMessage.innerHTML = "نام کاربری باید بیشتر از 3 کاراکتر باشد";
  }
});

const Password = PasswordElement.addEventListener("keyup",function(){
  if(PasswordElement.value.length > 8){
    PasswordMessage.classList.remove("hidden");
    PasswordMessage.classList.remove("unsuccess");
    PasswordMessage.classList.add("success");
    PasswordMessage.innerHTML = "گذرواژه صحیح می باشد";
  }else{
    PasswordMessage.classList.remove("hidden");
    PasswordMessage.classList.remove("success");
    PasswordMessage.classList.add("unsuccess");
    PasswordMessage.innerHTML = "گذرواژه باید بیشتر از 8 کاراکتر باشد";
  }
});

LoginButtonElement.addEventListener("click", function(){
  if(UsernameElement.value.length > 3 && PasswordElement.value.length > 8){
    SuccessModal.classList.remove("hidden");
    Modalimage.src = "./public/images/success.png"
    Modaltext.innerHTML = "عملیات با موفقیت انجام شد";
  }
  else{
    SuccessModal.classList.remove("hidden");
    Modalimage.src = "./public/images/failed.png"
    Modaltext.innerHTML = "نام کاربری یا گذرواژه صحیح نمی باشد";
  }
});

ModalButton.addEventListener("click", function(){
  SuccessModal.classList.add("hidden");
});