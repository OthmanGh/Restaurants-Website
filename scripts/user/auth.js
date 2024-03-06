// Check if user is already logged in
const loggedIn = localStorage.userId ?? 0;
if (loggedIn == -1) {
  window.location.replace('../admin/index.html');
} else if (loggedIn !== 0) {
  window.location.replace('../../index.html');
}

const users = JSON.parse(localStorage.users ?? '[]');
const adminCredentials = {
  email: 'admin@admin.com',
  password: 'admin123',
};

const [authForm, authName, authNameFieldset, authEmail, authPassword, authMessage, authStateToggler, submitBtn] = [
  document.getElementById('auth_form'),
  document.getElementById('auth_name'),
  document.getElementById('auth_name_fieldset'),
  document.getElementById('auth_email'),
  document.getElementById('auth_password'),
  document.getElementById('auth_message'),
  document.getElementById('auth_state_toggler'),
  document.querySelector('.form-button'),
];
let authState = 'signup';

// Auth state toggler event
authStateToggler.addEventListener('click', (e) => {
  e.preventDefault();
  resetFormState();
  if (authState === 'signup') {
    authState = 'login';
    authStateToggler.textContent = 'Create an account';
    authNameFieldset.classList.add('hidden');
    submitBtn.textContent = 'Login';
    return;
  }
  authState = 'signup';
  authStateToggler.textContent = 'Login instead';
  authNameFieldset.classList.remove('hidden');
  submitBtn.textContent = 'Create account';
});

// Form event
authForm.addEventListener('submit', (e) => {
  resetFormState();
  e.preventDefault();
  auth(authName.value, authEmail.value, authPassword.value);
});

const auth = (name = '', email, password) => {
  // Sign Up
  if (authState === 'signup') {
    // Validation
    if (name === '') {
      authName.classList.add('form-input-error');
      authMessage.textContent = 'Please enter your name';
      authMessage.classList.add('auth_error');
      return;
    }
    if (!validateEmail(email)) {
      authEmail.classList.add('form-input-error');
      authMessage.textContent = 'Please enter a valid email address';
      authMessage.classList.add('auth_error');
      return;
    }
    if (password.length < 8) {
      authPassword.classList.add('form-input-error');
      authMessage.textContent = 'Your password must be at least 8 characters long.';
      authMessage.classList.add('auth_error');
      return;
    }

    // Check if user already has an account
    if (checkAlreadyExists(email)) {
      authMessage.textContent = 'You already have an account! Try logging in.';
      authMessage.classList.add('auth_error');
      return;
    }

    createUser(name, email, password);
    window.location.replace('../../index.html');

    return;
  }

  // Check for admin login
  if (email === adminCredentials.email && password === adminCredentials.password) {
    authMessage.textContent = 'Welcome, admin! Redirecting you now...';
    setTimeout(() => window.location.replace('../admin/index.html'), 1500);
    saveUserSession(-1);
    return;
  }

  const loginObject = login(email, password);

  if (!loginObject) {
    authMessage.textContent = 'Incorrect credentials.';
    authMessage.classList.add('auth_error');
    return;
  }
  window.location.replace('../../index.html');
  saveUserSession(loginObject.id);
};

// Helper functions
function resetFormState() {
  authName.classList.remove('form-input-error');
  authEmail.classList.remove('form-input-error');
  authPassword.classList.remove('form-input-error');
  authMessage.classList.remove('auth_error');
  authMessage.textContent = '';
}

function login(email, password) {
  const usersFilter = users.filter((user) => user.email === email && user.password === password);
  if (usersFilter.length > 0) {
    return usersFilter[0];
  }
  return false;
}

function checkAlreadyExists(email) {
  const usersFilter = users.filter((user) => user.email === email);
  if (usersFilter.length > 0) {
    return true;
  }
  return false;
}

function createUser(name, email, password) {
  const userObject = {
    id: (users[users.length - 1]?.id ?? 0) + 1,
    name: name,
    email: email,
    password: password,
    favorites: [],
  };
  saveUserSession(userObject.id);
  localStorage.users = JSON.stringify([...users, userObject]);
}

function saveUserSession(id) {
  localStorage.setItem('userId', id);
}

function validateEmail(email = '') {
  const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (validationRegex.test(email)) {
    return true;
  }
  return false;
}
