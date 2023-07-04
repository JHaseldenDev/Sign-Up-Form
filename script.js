document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
const showPasswordToggle = document.getElementById('show-password-toggle');

showPasswordToggle.addEventListener('change', function () {
  if (showPasswordToggle.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorField = document.getElementById('error-field');
  
    confirmPasswordInput.addEventListener('input', function() {
      errorField.textContent = '';
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorField.textContent = 'Passwords do not match.';
      }
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      errorField.textContent = '';
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorField.textContent = 'Passwords do not match.';
        return;
      }
  
      // Form submission logic goes here
      // You can send the form data to a server or perform other actions
    });
  });

  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', function () {
    const phoneNumber = phoneInput.value.replace(/\D/g, '');
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    phoneInput.value = formattedPhoneNumber;
  });
  
  function formatPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /(\d{0,3})(\d{0,3})(\d{0,4})/;
    const phoneNumberParts = phoneNumber.match(phoneNumberPattern).slice(1);
    let formattedPhoneNumber = '';
  
    if (phoneNumberParts[0]) {
      formattedPhoneNumber += `(${phoneNumberParts[0]})`;
    }
    if (phoneNumberParts[1]) {
      formattedPhoneNumber += `-${phoneNumberParts[1]}`;
    }
    if (phoneNumberParts[2]) {
      formattedPhoneNumber += `-${phoneNumberParts[2]}`;
    }
  
    return formattedPhoneNumber;
  }
  