const convertKelvToCelcAndRoundDown = (temp) => {
  const kelv = parseInt(temp, 10);
  const cels = kelv - 273.15;
  const x = Math.floor(cels);
  let ans = x.toString();
  ans += '&#x2103';
  return ans;
};

const convertKelvToFarAndRoundDown = (temp) => {
  const kelv = parseInt(temp, 10);
  const far = (kelv - 273.15) * (9 / 5) + 32;
  const x = Math.floor(far);
  let ans = x.toString();
  ans += '&#8457';
  return ans;
};

export { convertKelvToCelcAndRoundDown, convertKelvToFarAndRoundDown };
