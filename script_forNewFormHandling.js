document.getElementById('form-1').addEventListener('submit', displayOutput);

// Normal method: using JS value property to read form input
function displayOutput(e) {
  e.preventDefault();

  // Getting formData values from formData iterator
  const formInputDataObject = new FormData(document.getElementById('form-1'));
  const nameInput = formInputDataObject.get('name');
  const countryInput = formInputDataObject.get('country');
  const subjectInput = formInputDataObject.get('subject');
  const sexRadioBtnInputValue = formInputDataObject.get('sex');
  const checkBoxInput = formInputDataObject.get('agree');

  // Form validation
  if (
    nameInput !== '' &&
    countryInput !== '' &&
    subjectInput !== '' &&
    sexRadioBtnInputValue !== null &&
    checkBoxInput !== null
  ) {
    // Display output
    displayData(formInputDataObject);
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

function displayData(formInputDataObject) {
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

  // Get formData-entry iterator from buit-in FormData object
  const formInputData = formInputDataObject.entries();

  for (let entry of formInputData) {
    const flexRow = document.createElement('div');
    flexRow.className = 'flex-row';
    flexRow.style.display = 'flex';
    flexRow.style.marginTop = '5px';

    const flexColumn1 = document.createElement('div');
    flexColumn1.className = 'flex-col-1';
    flexColumn1.style.width = '25%';
    flexColumn1.textContent = entry[0];
    flexColumn1.style.padding = '12px 20px';

    const flexColumn2 = document.createElement('div');
    flexColumn2.className = 'flex-col-2';
    flexColumn2.style.width = '75%';
    flexColumn2.textContent = entry[1] === 'on' ? 'Yes' : entry[1];
    flexColumn2.style.padding = '7px 20px';
    flexRow.append(flexColumn1, flexColumn2);
    flexContainer.appendChild(flexRow);
    formData.appendChild(flexContainer);
  }
}
