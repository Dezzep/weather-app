import './styles.scss';
import { convertKelvToCelcAndRoundDown, convertKelvToFarAndRoundDown } from './temp-convert';

let celsius = true;
const temperature = document.getElementById('temperature');
const location = document.getElementById('location');
const conditions = document.getElementById('conditions');
const weatherIcon = document.getElementById('weather-icon');
let tempFarenheit;
let tempCelsius;

const getWeather = async (enteredLocation) => {
  try {
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&APPID=5a0666d038ba8f944ba08c0c14ce62df`, { mode: 'cors' });
    const obtainedWeather = await fetchWeather.json();
    console.log(obtainedWeather);
    tempCelsius = convertKelvToCelcAndRoundDown(obtainedWeather.main.temp);
    tempFarenheit = convertKelvToFarAndRoundDown(obtainedWeather.main.temp);
    conditions.innerText = obtainedWeather.weather[0].description;
    location.innerText = obtainedWeather.name;
    weatherIcon.src = `http://openweathermap.org/img/w/${obtainedWeather.weather[0].icon}.png`;
    if (celsius) {
      temperature.innerHTML = convertKelvToCelcAndRoundDown(obtainedWeather.main.temp);
    } else {
      temperature.innerHTML = convertKelvToFarAndRoundDown(obtainedWeather.main.temp);
    }
  } catch (err) {
    alert(err) //change this to --> display unfound city
  }
};

getWeather('toronto');

const changeTemp = () => {
  const button = document.getElementById('changeTemp');
  button.addEventListener('click', () => {
    if (!celsius) {
      temperature.innerHTML = tempCelsius;
      button.innerText = 'Change To Farenheit';
      celsius = true;
    } else {
      temperature.innerHTML = tempFarenheit;
      button.innerText = 'Change To Celsius';
      celsius = false;
    }
  });
};
changeTemp();

getWeather('montreal');
