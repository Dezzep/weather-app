const formListener = (weatherGet) => {
  const formId = document.getElementById('enter-city');
  const submittedData = document.getElementById('city');
  formId.addEventListener('submit', (e) => {
    console.log(submittedData);
    e.preventDefault();
    weatherGet(submittedData.value);
    submittedData.value = '';
  });
};
export default formListener;
