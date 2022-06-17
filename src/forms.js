const formListener = (weatherGet) => {
  const formId = document.getElementById('enter-city');
  const submittedData = document.getElementById('city');
  formId.addEventListener('submit', (e) => {
    e.preventDefault();
    weatherGet(submittedData.value);
    submittedData.value = '';
  });
};
export default formListener;
