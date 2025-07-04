const CityInput = document.querySelector(".city-input");
const SerchBtn = document.querySelector("#search-button");
const CityInfo = document.querySelector(".city");
const Humidity = document.querySelector(".humidity");
const Temp = document.querySelector(".temp");

const data = {
  tehran: { temp: 21, humidity: 12, country: "Iran" },
  tabriz: { temp: 11, humidity: 4, country: "Iran" },
  mashhad: { temp: 17, humidity: 13, country: "Iran" },
  shiraz: { temp: 19, humidity: 9, country: "Iran" },
  gorgan: { temp: 35, humidity: 18, country: "Iran" },
};

function SerchCity(){
    const city = CityInput.value;
    const CityInformation = data[city.toLowerCase()];
    if (city) {
        CityInfo.innerHTML = `${city} - ${CityInformation.country}`;
        Humidity.innerHTML = `Humidity: ${CityInformation.humidity}%`;
        Temp.innerHTML = CityInformation.temp;
    }else{
        alert("Please enter a city name");
        return;
    }

}

SerchBtn.addEventListener("click", SerchCity);