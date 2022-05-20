const datesForForecast = () => {
  const todayFullDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const forecastedDays = [];
  const today = todayFullDate.getDay();
  let nextDay = today;
  for (let i = 0; i < 5; i += 1) {
    nextDay += 1;
    if (nextDay >= 7) {
      nextDay = 0;
    }
    forecastedDays.push(daysOfWeek[nextDay]);
  }
  return forecastedDays;
};

export default datesForForecast;
