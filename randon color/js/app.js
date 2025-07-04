const generateBtn = document.querySelector(".generate-btn");
const colorCode = document.querySelector(".color-code");
const colorCard = document.querySelector(".color-card");

generateBtn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  colorCode.innerHTML = `rgb(${red},${green},${blue})`;
  colorCard.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
