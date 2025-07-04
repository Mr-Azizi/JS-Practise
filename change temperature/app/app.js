const tempInput = document.querySelector(".temp-input");
const tempOutput = document.querySelector(".f-result");
const convertBtn = document.querySelector(".convert");
const clearBtn = document.querySelector(".clear");

convertBtn.addEventListener("click", function(){
    const celsius = tempInput.value;
    if (celsius === "" || isNaN(celsius)) {
        tempOutput.textContent = "Please enter a temperature in Celsius.";
    }else{
        const fahrenheit = (celsius * 9/5) + 32;
        tempOutput.textContent = fahrenheit;
        
    }
})

clearBtn.addEventListener("click", function(){
    tempInput.value = "";
    tempOutput.textContent = "";
})