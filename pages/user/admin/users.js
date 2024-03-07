// Check if admin is logged in
const loggedIn = localStorage.userId ?? 0;
if (loggedIn != -1) {
  window.location.replace("../user/auth.html");
}

const addUserBtn = document.getElementById("add_user_btn");
const signupForm = document.getElementById("signup_form");
const [signupNameInput, signupEmailInput, signupPasswordInput] = [
  document.getElementById("signup_name"),
  document.getElementById("signup_email"),
  document.getElementById("signup_password"),
];
const usersTable = document.getElementById("users_table");
const usersTableBody = document.querySelector("#users_table > tbody");

// Events
addUserBtn.addEventListener("click", () =>
  signupForm.classList.toggle("hidden")
);
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createUser(
    signupNameInput.value,
    signupEmailInput.value,
    signupPasswordInput.value
  );
});

function createUser(name, email, password) {
  const users = JSON.parse(localStorage.users ?? "[]");
  const userObject = {
    id: (users[users.length - 1]?.id ?? 0) + 1,
    name: name,
    email: email,
    password: password,
    favorites: [],
  };
  localStorage.users = JSON.stringify([...users, userObject]);
  addUserRow(userObject);
}

function addUserRow(user) {
  addRow(
    "user",
    user.id,
    [
      {
        data: user.id,
      },
      {
        data: user.name,
      },
      {
        data: user.email,
      },
      {
        data: user.password,
      },
      {
        data: user.favorites.length,
      },
    ],
    usersTableBody,
    deleteUser
  );
}

function populateUsersTable() {
  const users = JSON.parse(localStorage.users ?? "[]");
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    addUserRow(user);
  }
}

populateUsersTable();

function deleteUser(id) {
  const users = JSON.parse(localStorage.users ?? "[]");
  document.querySelector(`#user_${id}`).remove();
  const usersFilter = users.filter((user) => user.id != id);
  localStorage.users = JSON.stringify([...usersFilter]);
}
