const convertKelvToCelcAndRound = (temp) => {
  const kelv = parseInt(temp, 10);
  const cels = kelv - 273.15;
  const x = Math.round(cels);
  let ans = x.toString();
  ans += '&#x2103';
  return ans;
};

const convertKelvToFarAndRound = (temp) => {
  const kelv = parseInt(temp, 10);
  const far = (kelv - 273.15) * (9 / 5) + 32;
  const x = Math.round(far);
  let ans = x.toString();
  ans += '&#8457';
  return ans;
};

const celsiusToDom = (cels, id) => {
  id.innerHTML = cels;
  const button = document.getElementById('changeTemp');
  button.innerText = 'Change To Fahrenheit';
};

const fahrenheitToDom = (far, id) => {
  id.innerHTML = far;
  const button = document.getElementById('changeTemp');
  button.innerText = 'Change To Celsius';
};
let celsiusVal = true;
const changeToFarOrCels = (cels, far, id) => {
  if (celsiusVal) {
    fahrenheitToDom(far, id);
    celsiusVal = false;
  } else if (!celsiusVal) {
    celsiusToDom(cels, id);
    celsiusVal = true;
  }
};
const changeTemp = (cels, far) => {
  const temp = document.getElementById('temperature');
  changeToFarOrCels(cels, far, temp);
};


const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const averageNumbersIn2dArray = (arr) => {
  const dayTempAverages = [];

  for (let i = 0; i < arr.length; i += 1) {
    dayTempAverages.push(average(arr[i]));
  }
  return dayTempAverages;
};

const splitArrayIn8AndReturnTempAverages = (arr) => {
  let groupOf8Numbers = [];
  const arrayOfGroupedNumbers = [];
  let countTo8 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    groupOf8Numbers.push(arr[i].main.temp);
    countTo8 += 1;
    if (countTo8 > 7) {
      arrayOfGroupedNumbers.push(groupOf8Numbers);
      groupOf8Numbers = [];
      countTo8 = 0;
    }
  }
  if (countTo8 < 7) {
    arrayOfGroupedNumbers.push(groupOf8Numbers);
  }
  return averageNumbersIn2dArray(arrayOfGroupedNumbers);
};

export {
  convertKelvToCelcAndRound, convertKelvToFarAndRound, changeToFarOrCels,
  average, splitArrayIn8AndReturnTempAverages, changeTemp,
};
