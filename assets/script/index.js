let cities=['Saint-Petersburg','Marburg','Odessa'];// массив городов

let temperatures=[];// пустой массив, который будет хранить температуры для каждого города

for(let city of cities){
    let temperature=parseFloat(prompt(`Please enter temperature in the city ${city}:`));
    temperatures.push({city,temperature});
}

let temperatureList=document.getElementById('temperature-list');
let maxTemperature=-Infinity;
let minTemperature=Infinity;
for(let data of temperatures){
    let listItem=document.createElement('li');
    listItem.textContent= `${data.city}:${data.temperature}°C`;
    temperatureList.appendChild(listItem);

    if(data.temperature>maxTemperature){
        maxTemperature=data.temperature;
    }
    if(data.temperature<minTemperature){
        minTemperature=data.temperature;
    }
}
let maxMinInfo = document.createElement('li');
    maxMinInfo.textContent = `Maximum temperature: ${maxTemperature}°C, Minimum temperature: ${minTemperature}°C`;
    temperatureList.appendChild(maxMinInfo);