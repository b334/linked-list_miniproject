const nameInput = document.getElementById('name');
const countryInput = document.getElementById('country');
const subjectInput = document.getElementById('subject');
const sexRadioBtnInput = document.querySelectorAll('input[name=sex]');
const checkBoxInput = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
document.getElementById('form-1').addEventListener('submit', displayOutput);

// Normal method: using JS value property to read form input
function displayOutput(e) {
  e.preventDefault();
  // Obtain value of radio button
  let sexRadioBtnInputValue;
  sexRadioBtnInput.forEach((radioBtn) => {
    if (radioBtn.checked) sexRadioBtnInputValue = radioBtn.value;
  });

  // Form validation
  if (
    nameInput.value !== '' &&
    countryInput.value !== '' &&
    subjectInput.value !== '' &&
    sexRadioBtnInputValue !== undefined &&
    checkBoxInput.checked
  ) {
    // Display output
    displayData({
      Name: nameInput.value,
      Country: countryInput.value,
      Subject: subjectInput.value,
      Sex: sexRadioBtnInputValue,
    });
  } else {
    // Error message for invalid form
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
}

function displayData(inputValues) {
  // Clear error message
  const errorMsgDiv = document.querySelector('.error-msg');
  if (errorMsgDiv.firstElementChild) {
    errorMsgDiv.textContent = '';
  }
  //  Display output data
  const formData = document.querySelector('.form-output');
  const flexContainer = document.createElement('div');
  flexContainer.className = 'flexcontainer';
  flexContainer.style.backgroundColor = '#ccc';

  for (let key in inputValues) {
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
    flexColumn2.textContent = inputValues[key];
    flexColumn2.style.padding = '7px 20px';
    flexRow.append(flexColumn1, flexColumn2);
    flexContainer.appendChild(flexRow);
    formData.appendChild(flexContainer);
  }
}
