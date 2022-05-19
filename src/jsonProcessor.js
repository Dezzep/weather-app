import { convertKelvToCelcAndRound, convertKelvToFarAndRound } from './temp-convert';

let celsius = true;

export default class JsonDataFromOpenWeatherMapThatIsUsed {
  constructor(weatherObtained) {
    this.locationId = weatherObtained.id;
    this.tempInKelvin = weatherObtained.main.temp;
    this.iconForWeather = `http://openweathermap.org/img/w/${weatherObtained.weather[0].icon}.png`;
    this.location = weatherObtained.name;
    this.description = weatherObtained.weather[0].description;
    this.tempCelsius = convertKelvToCelcAndRound(this.tempInKelvin);
    this.tempFahrenheit = convertKelvToFarAndRound(this.tempInKelvin);
    this.temperature = document.getElementById('temperature');
    const pushToDom = () => {
      const location = document.getElementById('location');
      const conditions = document.getElementById('conditions');
      const weatherIcon = document.getElementById('weather-icon');
      location.innerText = this.location;
      conditions.innerText = this.description;
      weatherIcon.src = this.iconForWeather;
      if (celsius) {
        this.temperature.innerHTML = this.tempCelsius;
      } else {
        this.temperature.innerHTML = this.tempFahrenheit
      }
    };
    const changeTemp = () => {
      const button = document.getElementById('changeTemp');
      button.addEventListener('click', () => {
        if (!celsius) {
          this.temperature.innerHTML = this.tempCelsius;
          button.innerText = 'Change To Farenheit';
          celsius = true;
        } else {
          this.temperature.innerHTML = this.tempFahrenheit;
          button.innerText = 'Change To Celsius';
          celsius = false;
        }
      });
    };
    changeTemp();
    pushToDom();
  }
}
