const registrationForm = document.getElementById("registrationForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const cardHolderNameInput = document.getElementById("cardHolderName");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const cardHolderName = cardHolderNameInput.value.trim();
  const country = document.getElementById("country").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const agreement = document.getElementById("agreement").checked;


  const firstNameError = document.getElementById("firstNameError");

  function isLatinString(input) {
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        return false;
      }
    }
    return true;
  }
  
  function showErrorMessage(inputElement, errorMessage) {
    inputElement.style.borderColor = 'red';
    const errorElement = inputElement.nextElementSibling;
    errorElement.innerText = errorMessage;
    errorElement.style.display = 'block';
    errorElement.borderColor = 'red';
    errorElement.style.color = 'red';
    
  }
  
  function hideErrorMessage(inputElement) {
    inputElement.style.borderColor = '#969696';
    const errorElement = inputElement.nextElementSibling;
    errorElement.innerText = '';
    errorElement.style.display = 'none';
  }
  
    if (!isLatinString(firstName) || firstName === '') {
      showErrorMessage(firstNameInput, "Используйте только латинские символы.");
      return;
    } else {
      hideErrorMessage(firstNameInput);
    }
  
  if (emailInput.value && !/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(emailInput.value)) {
    alert("Пожалуйста, введите корректный e-mail.");
    emailInput.style.borderColor = 'red';
    return;
  } else {
    emailInput.style.borderColor = '#969696';
  }

  if (country && phoneNumber && agreement ) {
    alert("Вы успешно зарегистрированы!");
  } else {
    alert("Пожалуйста, заполните все обязательные поля и согласитесь с условиями пользовательского соглашения.");
  }

})
