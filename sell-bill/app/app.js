const ProvinceSelect = document.querySelector('.Province-select');
const CitySelect = document.querySelector('.city-select');

document.createElement('option');

const Provinces = {
    تهران: ["تهران","دماوند","کرج"],
    تبریز: ["تبریز","جلفا","اهر"],
    فارس: ["شیراز","فسا","مرودشت"],
}

const Province = Object.keys(Provinces);

let newOption;
Province.forEach(function(Province) {
    newOption = document.createElement("option");
    newOption.value = Province;
    newOption.textContent = Province;
    newOption.classList.add('px-4');
    ProvinceSelect.appendChild(newOption);    
});


ProvinceSelect.addEventListener("change", function() {
    const selectedProvince = ProvinceSelect.value;
    let Cities = Provinces[selectedProvince];
    
    CitySelect.textContent = "لطفا انتخاب نمائید ..."

    let newOptioncity;
    Cities.forEach(function (item){
        newOptioncity = document.createElement("option");
        newOptioncity.value = item;
        newOptioncity.textContent = item;
        newOptioncity.classList.add('px-4');
        CitySelect.appendChild(newOptioncity);
    })
});
