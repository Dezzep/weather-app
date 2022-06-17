// default displayed temperature value is celsius.

import { convertKelvToCelcAndRound, convertKelvToFarAndRound, displayCurrentTemp, timeConversionFromMsToHourMinute } from './temp-convert';

export default class TodaysForecast {
  constructor(weatherObtained) {
    this.locationId = weatherObtained.id;
    this.iconForWeather = `https://openweathermap.org/img/w/${weatherObtained.weather[0].icon}.png`;
    this.location = weatherObtained.name;
    this.description = weatherObtained.weather[0].description;
    this.humidity = weatherObtained.main.humidity;
    this.sunrise = (timeConversionFromMsToHourMinute(weatherObtained.sys.sunrise));
    this.sunset = (timeConversionFromMsToHourMinute(weatherObtained.sys.sunset));

    this.celsFeelsLike = convertKelvToCelcAndRound(weatherObtained.main.feels_like);
    this.farFeelsLike = convertKelvToFarAndRound(weatherObtained.main.feels_like);
    const pushToDom = () => {
      const location = document.getElementById('location');
      const conditions = document.getElementById('conditions');
      const weatherIcon = document.getElementById('weather-icon');
      const button = document.getElementById('changeTemp');
      const humidity = document.getElementById('humidity');
      const sunrise = document.getElementById('sunrise');
      const sunset = document.getElementById('sunset');
      displayCurrentTemp(this.celsFeelsLike, this.farFeelsLike, 'feels-like');
      button.addEventListener('click', () => {
        displayCurrentTemp(this.celsFeelsLike, this.farFeelsLike, 'feels-like');
      });
      location.innerText = this.location;
      conditions.innerText = this.description;
      weatherIcon.src = this.iconForWeather;
      humidity.innerText = `${this.humidity}%`;
      sunrise.innerText = this.sunrise;
      sunset.innerText = this.sunset;
    };
    pushToDom();
  }
}
