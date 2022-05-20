import './styles.scss';
import formListener from './forms';
import JsonDataFromOpenWeatherMapThatIsUsed from './jsonProcessor';
import weatherForecast5Days from './five-day-forecast';

const getWeather = async (enteredLocation) => {
  try {
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&APPID=5a0666d038ba8f944ba08c0c14ce62df`, { mode: 'cors' });
    const obtainedWeather = await fetchWeather.json();
    // goes to a seperate module which takes jsonData needed and updates it to the dom.
    // eslint-disable-next-line no-unused-vars
    const obtainTheData = new JsonDataFromOpenWeatherMapThatIsUsed(obtainedWeather);
    console.log(obtainedWeather);
    const cordLat = obtainedWeather.coord.lat;
    const cordLon = obtainedWeather.coord.lon;
    weatherForecast5Days(cordLat, cordLon);
  } catch (err) {
    alert(err);
  }
};

getWeather('montreal');
formListener(getWeather);
