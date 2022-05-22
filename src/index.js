import './styles.scss';
import formListener from './forms';
import weatherForecast5Days from './five-day-forecast';
import TodaysForecast from './todaysForecast';
import { convertKelvToCelcAndRound, convertKelvToFarAndRound, changeTemp} from './temp-convert';

let celsDegree;
let farDegree;
const key = '5a0666d038ba8f944ba08c0c14ce62df';

const getWeather = async (enteredLocation) => {
  try {
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&APPID=${key}`, { mode: 'cors' });
    const obtainedWeather = await fetchWeather.json();
    // goes to a seperate module which takes jsonData needed and updates it to the dom.
    // eslint-disable-next-line no-unused-vars
    const obtainTheData = new TodaysForecast(obtainedWeather);
    const cordLat = obtainedWeather.coord.lat;
    const cordLon = obtainedWeather.coord.lon;
    weatherForecast5Days(cordLat, cordLon, key);
    celsDegree = convertKelvToCelcAndRound(obtainedWeather.main.temp);
    farDegree = convertKelvToFarAndRound(obtainedWeather.main.temp);
    changeTemp(celsDegree, farDegree); // calling this function twice because
    changeTemp(celsDegree, farDegree); // it switches to far from cels when called
    // to fix this I should make the logic not be in the function.
  } catch (err) {
    alert(err);
  }
};
const button = document.getElementById('changeTemp');
button.addEventListener('click', () => {
  changeTemp(celsDegree, farDegree);
});

getWeather('montreal'); // default weather for when user loads the page.
formListener(getWeather); // awaits user input.
