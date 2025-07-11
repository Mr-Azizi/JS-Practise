const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculateBtn = document.querySelector(".calculate-button");
const modalScreen = document.querySelector(".modal-screen");
const resultBmi = document.querySelector(".result");
const statusBmi = document.querySelector(".status");
const closeXBtn = document.querySelector(".close-x-btn");
const closeBtn = document.querySelector(".close");
const continueBtn = document.querySelector(".continue"); 


function calculate(){
  const Bmi = +(weight.value / Math.pow(height.value, 2)).toFixed(1);
  modalScreen.classList.remove("hidden");
  if(Bmi <= 18.4){
    resultBmi.classList.add("not-bad");
    resultBmi.innerHTML = Bmi;
    statusBmi.classList.add("not-bad");
    statusBmi.innerHTML = "کمبود وزن"
  }else if(Bmi <= 24.9 && Bmi >= 18.5){
    resultBmi.classList.add("good");
    resultBmi.innerHTML = Bmi;
    statusBmi.classList.add("good");
    statusBmi.innerHTML = "متعادل"
  }else if(Bmi <=39.9  && Bmi >= 25){
    resultBmi.classList.add("bad");
    resultBmi.innerHTML = Bmi;
    statusBmi.classList.add("bad");
    statusBmi.innerHTML = "اضافه وزن"
  }else if(Bmi >= 40){
    resultBmi.classList.add("bad");
    resultBmi.innerHTML = Bmi;
    statusBmi.classList.add("bad");
    statusBmi.innerHTML = "اضافه وزن بیش از حد"
  }
}
function hideModal(){
  modalScreen.classList.add("hidden");
  weight.value = "";
  height.value = "";
  resultBmi.classList = "result";
  statusBmi.classList = "status";  
}
calculateBtn.addEventListener("click", calculate);
document.body.addEventListener("keydown", function(event){
  if (event.key ==="Enter") {
    calculate();
  }
})
closeXBtn.addEventListener("click", hideModal);
closeBtn.addEventListener("click", hideModal);
continueBtn.addEventListener("click", hideModal);
document.body.addEventListener("keydown", function(event){
  if (event.key ==="Escape") {
    hideModal();
  }
})
