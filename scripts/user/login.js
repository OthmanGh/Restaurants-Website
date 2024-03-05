// Check if user is already logged in
const loggedIn = localStorage.userId ?? 0;
if (loggedIn == -1) {
  window.location.replace("../admin/index.html");
} else if (loggedIn !== 0) {
  window.location.replace("../../index.html");
}

const users = JSON.parse(localStorage.users ?? "[]");
const adminCredentials = {
  email: "admin@admin.com",
  password: "admin123",
};

const loginForm = document.getElementById("login_form");
const errorMessage = document.getElementById("error_message");
const [loginEmailInput, loginPasswordInput] = [
  document.getElementById("login_email"),
  document.getElementById("login_password"),
];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  // Check for admin login
  if (
    email === adminCredentials.email &&
    password === adminCredentials.password
  ) {
    errorMessage.innerHTML = "Welcome, admin! Redirecting you now...";
    setTimeout(() => window.location.replace("../admin/index.html"), 1500);
    saveUserSession(-1);
    return;
  }

  const loginObject = login(email, password);

  if (!loginObject) {
    errorMessage.innerHTML = "Incorrect credentials.";
    return;
  }
  window.location.replace("../../index.html");
  saveUserSession(loginObject.id);
  return;
});

function saveUserSession(id) {
  localStorage.setItem("userId", id);
}

function login(email, password) {
  const usersFilter = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (usersFilter.length > 0) {
    return usersFilter[0];
  }
  return false;
}
