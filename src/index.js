import './styles.scss';

const conditions = document.getElementById('conditions');
const weatherIcon = document.getElementById('weather-icon')

const getWeather = async (location) => {
  try {
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5a0666d038ba8f944ba08c0c14ce62df`, { mode: 'cors' });
    const obtainedWeather = await fetchWeather.json();
    console.log(obtainedWeather);
    console.log(obtainedWeather.weather[0].icon);
    
    conditions.innerText = obtainedWeather.weather[0].main;
    weatherIcon.src = `http://openweathermap.org/img/w/${obtainedWeather.weather[0].icon}.png`;
  } catch (err) {
    alert(err)
    //make this become (cant find that location)
  }
};

getWeather('montreal');
