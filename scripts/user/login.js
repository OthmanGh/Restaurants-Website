const users = JSON.parse(localStorage.users ?? "[]");

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

  const loginObject = login(email, password);

  if (loginObject?.error) {
    errorMessage.innerHTML = "Please enter the correct credentials.";
    return;
  }
  alert(`Hello, ${loginObject.name}!`);
});

function login(email, password) {
  const usersFilter = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (usersFilter.length > 0) {
    return usersFilter[0];
  }
  return {
    error: true,
  };
}
