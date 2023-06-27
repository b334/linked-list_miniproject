const fullName = document.getElementById('name');
const formInputData = {};
fullName.addEventListener('input', (e) => {
  formInputData.Name = e.target.value;
});

const country = document.getElementById('country');
country.addEventListener('change', (e) => {
  formInputData.Country = e.target.value;
});

const textBox = document.getElementById('subject');
textBox.addEventListener('input', (e) => {
  formInputData.Subject = e.target.value;
});

const sex = document.querySelectorAll("input[name ='sex']");
sex.forEach((element) => {
  element.addEventListener('change', (e) => {
    formInputData.Sex = e.target.value;
  });
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', (e) => {
  formInputData.Agree = e.target.checked ? 'Yes' : 'No';
});

const form = document.getElementById('form-1');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    Object.keys(formInputData).length === 5 &&
    formInputData.Name !== '' &&
    formInputData.Country !== '' &&
    formInputData.Subject !== '' &&
    formInputData.Sex !== undefined &&
    formInputData.Agree === 'Yes'
  ) {
    displayOutput();
  } else {
    const errorMsgDiv = document.querySelector('.error-msg');
    while (!errorMsgDiv.firstElementChild) {
      const errorMessage = document.createElement('div');
      errorMessage.style.backgroundColor = 'red';
      errorMessage.style.color = 'white';
      errorMessage.style.padding = '12px';
      errorMessage.style.fontWeight = 'bold';
      errorMessage.style.fontSize = '18px';
      errorMessage.style.textAlign = 'center';
      errorMessage.textContent = 'Please complete the form before submitting.';
      errorMsgDiv.appendChild(errorMessage);
    }
  }
});

function displayOutput() {
  const errorMsgDiv = document.querySelector('.error-msg');
  if (errorMsgDiv.firstElementChild) {
    errorMsgDiv.textContent = '';
  }
  const formData = document.querySelector('.form-output');
  const flexContainer = document.createElement('div');
  flexContainer.className = 'flexcontainer';
  flexContainer.style.backgroundColor = '#ccc';

  for (let key in formInputData) {
    const flexRow = document.createElement('div');
    flexRow.className = 'flex-row';
    flexRow.style.display = 'flex';
    flexRow.style.marginTop = '5px';
    const flexColumn1 = document.createElement('div');
    flexColumn1.className = 'flex-col-1';
    flexColumn1.style.width = '25%';
    flexColumn1.textContent = key;
    flexColumn1.style.padding = '12px 20px';

    const flexColumn2 = document.createElement('div');
    flexColumn2.className = 'flex-col-2';
    flexColumn2.style.width = '75%';
    flexColumn2.textContent = formInputData[key];
    flexColumn2.style.padding = '7px 20px';
    flexRow.append(flexColumn1, flexColumn2);
    flexContainer.appendChild(flexRow);
    formData.appendChild(flexContainer);
  }
}
