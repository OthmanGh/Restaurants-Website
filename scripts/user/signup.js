const users = JSON.parse(localStorage.users ?? "[]");

const signupForm = document.getElementById("signup_form");
const [signupNameInput, signupEmailInput, signupPasswordInput] = [
  document.getElementById("signup_name"),
  document.getElementById("signup_email"),
  document.getElementById("signup_password"),
];
const [signupNameError, signupEmailError, signupPasswordError] = [
  document.querySelector("#signup_name + .error_message"),
  document.querySelector("#signup_email + .error_message"),
  document.querySelector("#signup_password + .error_message"),
];

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  signup(
    signupNameInput.value,
    signupEmailInput.value,
    signupPasswordInput.value
  );
});

function signup(name = "", email = "", password = "") {
  // Reset form state
  signupNameInput.classList.remove("form-input-error");
  signupNameError.innerHTML = "";
  signupEmailInput.classList.remove("form-input-error");
  signupEmailError.innerHTML = "";
  signupPasswordInput.classList.remove("form-input-error");
  signupPasswordError.innerHTML = "";

  // Validation
  if (name === "") {
    signupNameInput.classList.add("form-input-error");
    signupNameError.innerHTML = "Please enter your name";
    return;
  }
  if (!validateEmail(email)) {
    signupEmailInput.classList.add("form-input-error");
    signupEmailError.innerHTML = "Please enter a valid email address";
    return;
  }
  if (password.length < 8) {
    signupPasswordInput.classList.add("form-input-error");
    signupPasswordError.innerHTML =
      "Your password must be at least 8 characters long.";
    return;
  }

  // Check if user already has an account
  if (checkAlreadyExists(email)) {
    signupPasswordError.innerHTML =
      "You already have an account! Try logging in.";
    return;
  }

  createUser(name, email, password);
  window.location.replace("./login.html");
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
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  };
  localStorage.users = JSON.stringify([...users, userObject]);
}

// Helper functions
function validateEmail(email = "") {
  const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (validationRegex.test(email)) {
    return true;
  }
  return false;
}
