// default displayed temperature value is celsius.

export default class TodaysForecast {
  constructor(weatherObtained) {
    this.locationId = weatherObtained.id;
    // this.tempInKelvin = weatherObtained.main.temp;
    this.iconForWeather = `http://openweathermap.org/img/w/${weatherObtained.weather[0].icon}.png`;
    this.location = weatherObtained.name;
    this.description = weatherObtained.weather[0].description;
    // this.tempCelsius = convertKelvToCelcAndRound(this.tempInKelvin);
    // this.tempFahrenheit = convertKelvToFarAndRound(this.tempInKelvin);
    this.temperature = document.getElementById('temperature');
    const pushToDom = () => {
      const location = document.getElementById('location');
      const conditions = document.getElementById('conditions');
      const weatherIcon = document.getElementById('weather-icon');
      location.innerText = this.location;
      conditions.innerText = this.description;
      weatherIcon.src = this.iconForWeather;
    };
    pushToDom();
  }
}
