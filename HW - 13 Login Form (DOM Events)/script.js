const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const usernameError = document.getElementById('username-error');
const userpasswordError = document.getElementById('userpasword-error');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validationPassword() {
  if (password.value.length < 6) {
    userpasswordError.textContent = 'Пароль менше 6 символів!';
  }
  else{
    userpasswordError.textContent = '';
    return true
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(username.value) && password.value.length > 6) {
    if (username.value === 'admin@domain.com' && password.value === 'password123') {
      window.location.replace('https://www.google.com');
      } else {
      alert('Неіснує такого користувача!');
     } 
  } 
  else {
    alert('Невірний логин або пароль!');
  }
});

username.addEventListener('blur', function() {
  if (!validateEmail(username.value)) {
    usernameError.textContent = 'Невірний формат email';
  } else {
    usernameError.textContent = '';
  }
});

password.addEventListener('blur', function() {
  validationPassword();
});

username.addEventListener('input', function() {
  loginButton.disabled = !(username.value && password.value);
});
password.addEventListener('input', function() {
  loginButton.disabled = !(username.value && password.value);
});
