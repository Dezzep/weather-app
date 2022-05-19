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

export { convertKelvToCelcAndRound, convertKelvToFarAndRound };
