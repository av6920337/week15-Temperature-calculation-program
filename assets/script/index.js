let cities=['Saint-Petersburg','Marburg','Odessa'];

let temperatures=[];

// С использованием цикла for..of
// ф-ция prompt(),для ввода данных пользователем
for(let city of cities){
    let temperature=parseFloat(prompt(`Please enter temperature in the city ${city}:`));
    temperatures.push({city,temperature});
}

let temperatureList=document.getElementById('temperature-list');

// создание переменных,которые гарантированно будут больше и меньше любой возможной температуры;специальные значения Infinity (бесконечность) и -Infinity (минус бесконечность), которые можно использовать для создания переменных с гарантированно максимальным и минимальным значением.
let maxTemperature=-Infinity;
let minTemperature=Infinity;


for(let data of temperatures){
    let listItem=document.createElement('li');
    listItem.textContent= `${data.city} : ${data.temperature}°C`;
    temperatureList.appendChild(listItem);

    if(data.temperature>maxTemperature){
        maxTemperature=data.temperature;
    }
    if(data.temperature<minTemperature){
        minTemperature=data.temperature;
    }
}

// Создание доп. элементов списка и выведение инфы о максимальной и минимальной температуры на экран . 
let maxTemperatureItem = document.createElement('li');
maxTemperatureItem.textContent = `Maximum temperature: ${maxTemperature}°C`;
temperatureList.appendChild(maxTemperatureItem);

let minTemperatureItem = document.createElement('li');
minTemperatureItem.textContent =`Minimum temperature: ${minTemperature}°C` ;
temperatureList.appendChild(minTemperatureItem);



// С использованием цикла for, !!!нуждается в доработке!!!.
// for(let city=0;city<cities.length;city++){
//     let temperature=Number(prompt(`Please enter temperature in ${cities[city]}`));
//     temperatures.push({city,temperature});
// }
//     let temperatureList = document.getElementById('temperature-list');

//     let minTemperature=Number.MAX_VALUE;
//     let maxTemperature=Number.MIN_VALUE;

// for (let data = 0; data < temperatures.length; data++) {
//     let itemList = document.createElement('li');
//     itemList.textContent = `In ${temperatures[data].city}: ${temperatures[data].temperature}°C`;
//     temperatureList.appendChild(itemList);

//     if (temperatures[data].temperature > maxTemperature) {
//         maxTemperature = temperatures[data].temperature;
//     }
    
//     if (temperatures[data].temperature < minTemperature) {
//         minTemperature = temperatures[data].temperature;
//     }
// }

// let maxMinInfo = document.createElement('li');
//         maxMinInfo.textContent = `Maximum temperature: ${maxTemperature}°C, Minimum temperature: ${minTemperature}°C`;
//         temperatureList.appendChild(maxMinInfo);

