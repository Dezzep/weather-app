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
  console.log(celsiusVal);

  if (celsiusVal) {
    fahrenheitToDom(far, id);
    celsiusVal = false;
  } else if (!celsiusVal) {
    celsiusToDom(cels, id);
    celsiusVal = true;
  }
};
export {
  convertKelvToCelcAndRound, convertKelvToFarAndRound, changeToFarOrCels,
};
