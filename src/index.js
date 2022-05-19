import './styles.scss';
import formListener from './forms';
import JsonDataFromOpenWeatherMapThatIsUsed from './jsonProcessor';

const weatherForecast5Days = async (cityCode) => {
  if (cityCode !== undefined) {
    const fetchForecast = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5a0666d038ba8f944ba08c0c14ce62df', { mode: 'cors' });
    const obtainedForecast = await fetchForecast.json();
  }
};

const getWeather = async (enteredLocation) => {
  try {
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&APPID=5a0666d038ba8f944ba08c0c14ce62df`, { mode: 'cors' });
    const obtainedWeather = await fetchWeather.json();
    // goes to a seperate module which takes jsonData needed and updates it to the dom.
    const obtainTheData = new JsonDataFromOpenWeatherMapThatIsUsed(obtainedWeather);
    console.log(obtainedWeather);
    weatherForecast5Days(obtainedWeather.id);
  } catch (err) {
    alert(err);
  }
};

getWeather('montreal');
formListener(getWeather);
