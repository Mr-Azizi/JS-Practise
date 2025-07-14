const range = document.querySelector("input");
const img = document.querySelector("body");
const imgStyle = getComputedStyle(img); 

// imgStyle.filter.brightness =2;
console.log(imgStyle);
img.style.filter = 'brightness(50%)';

function setBrightness(event){
    const brtight = event.target.value;
    img.style.filter = `brightness(${brtight}%)`;
}

range.addEventListener("change", setBrightness);