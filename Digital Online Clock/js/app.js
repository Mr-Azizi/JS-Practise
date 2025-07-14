const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
    const date = new Date();
    
    let hoursElm = date.getHours();
    let minutesElm = date.getMinutes();
    let secondsElm = date.getSeconds();    
    
    if(hoursElm < 10){
        hours.innerHTML = "0" + date.getHours();
    }else{
        hours.innerHTML = date.getHours();
    }
    if(minutesElm < 10){
        minutes.innerHTML = "0" + date.getMinutes();    
    }else{
        minutes.innerHTML = date.getMinutes();
    }
    if(secondsElm < 10){
        seconds.innerHTML = "0" + date.getSeconds();
    }else{
        seconds.innerHTML = date.getSeconds();
    }
} , 1000);