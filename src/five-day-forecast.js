import datesForForecast from './dates';
import { splitArrayIn8AndReturnTempAverages, convertKelvToCelcAndRound, convertKelvToFarAndRound } from './temp-convert';

class FiveDayForecastJsonProcessor {
  constructor(jsonForecast) {
    this.listOf3Hours = jsonForecast.list; // the api sends a list of updated weather every 3 hours
    this.days = [];
    this.every3HoursStartingFromTomorrow = [];
    this.averageTemps = [];
    this.arrayItemCounter = 0;
    this.celsTemps = [];
    this.farTemps = [];
  }

  get5Dates = (hourList) => {
    let nextDayConfirmed = false;
    for (let i = 0; i < hourList.length; i += 1) {
      if (hourList[i].dt_txt.includes('00:00:00')) { // each 00:00:00 is a new date.
      // A potential bug would be if the user checks for the weather at exactly 00:00:00.
        this.days.push(hourList[i]);
        nextDayConfirmed = true;
      }
      if (nextDayConfirmed) {
        this.every3HoursStartingFromTomorrow.push(hourList[i]);
      }
    }
    this.averageTemps = splitArrayIn8AndReturnTempAverages(this.every3HoursStartingFromTomorrow);
  };

  celsAndFarTempLoop = (avgtemps) => {
    for (let i = 0; i < avgtemps.length; i += 1) {
      this.celsTemps.push(convertKelvToCelcAndRound(avgtemps[i]));
      this.farTemps.push(convertKelvToFarAndRound(avgtemps[i]));
    }
  };
}
const appendADaysWeatherToTheDom = (weatherList) => {
  console.log(weatherList.days);
  weatherList.celsAndFarTempLoop(weatherList.averageTemps);
  const arrayOfNext5Days = datesForForecast();
  for (let i = 0; i < weatherList.days.length; i += 1) {
    const day = document.getElementById(`day${i}`);
    day.innerHTML = '';
    const icon = `http://openweathermap.org/img/w/${weatherList.days[i].weather[0].icon}.png`;
    // creates img and paragraph -- append it to dom.
    const img = document.createElement('img');
    img.src = `${icon}`;
    const para = document.createElement('p');
    para.innerText = `${arrayOfNext5Days[i]}`;
    day.append(img, para);
  }
  console.log(weatherList.celsTemps);
};

const weatherForecast5Days = async (lat, lon, apiKey) => {
  if (lat !== undefined && lon !== undefined) {
    const fetchForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`, { mode: 'cors' });
    const obtainedForecast = await fetchForecast.json();
    const fiveDayForecast = new FiveDayForecastJsonProcessor(obtainedForecast);
    fiveDayForecast.get5Dates(fiveDayForecast.listOf3Hours);
    appendADaysWeatherToTheDom(fiveDayForecast);
  }
};

export default weatherForecast5Days;
