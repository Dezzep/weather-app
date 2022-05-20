class FiveDayForecastJsonProcessor {
  constructor(jsonForecast) {
    this.listOf3Hours = jsonForecast.list; // the api sends a list of updated weather every 3 hours
    this.days = [];
  }

  get5Dates = (hourList) => {
    for (let i = 0; i < hourList.length; i += 1) {
      if (hourList[i].dt_txt.includes('00:00:00')) { // each 00:00:00 is a new date.
        // A potential bug would be if the user checks for the weather at exactly 00:00:00.
        this.days.push(hourList[i]);
      }
    }
  };
}

const appendADaysWeatherToTheDom = (weatherN) => {
  const container = document.getElementsByClassName('five-day-forecast');
  for (let i = 0; i < weatherN.days.length; i += 1) {
    const day = document.getElementById(`day${i}`);
    day.innerText = `today is day${i}`;
  }
};

const weatherForecast5Days = async (lat, lon) => {
  if (lat !== undefined && lon !== undefined) {
    const fetchForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5a0666d038ba8f944ba08c0c14ce62df`, { mode: 'cors' });
    const obtainedForecast = await fetchForecast.json();
    const fiveDayForecast = new FiveDayForecastJsonProcessor(obtainedForecast);
    fiveDayForecast.get5Dates(fiveDayForecast.listOf3Hours);
    appendADaysWeatherToTheDom(fiveDayForecast);
  }
};

export default weatherForecast5Days;
