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
  const { id, name, email, password, favorites } = user;
  // Row
  const userRow = document.createElement("tr");
  userRow.id = `user_${id}`;
  userRow.classList.add("user_row");

  // Button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => deleteUser(id));

  userRow.innerHTML += `<td>${id}</td>
  <td>${name}</td>
  <td>${email}</td>
  <td>${password}</td>
  <td>${favorites.length}</td>`;
  const actionsCol = document.createElement("td");
  actionsCol.append(deleteBtn);
  userRow.append(actionsCol);
  usersTableBody.append(userRow);
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

// Restaurants section
const restoForm = document.getElementById("resto_form");
const restosTable = document.querySelector("#restos_table tbody");
const addRestoBtn = document.getElementById("add_resto_btn");
const [restoImage, restoName, restoDesc, restoLocation] = [
  document.querySelector('.resto_details input[name="image"]'),
  document.querySelector('.resto_details input[name="name"]'),
  document.querySelector('.resto_details textarea[name="description"]'),
  document.querySelector('.resto_details input[name="location"]'),
];
addRestoBtn.addEventListener("click", () => {
  restoForm.classList.toggle("hidden");
});

restoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createResto(
    restoImage.value,
    restoName.value,
    restoDesc.value,
    restoLocation.value,
    document.querySelector('.resto_details input[name="rating"]:checked').value
  );
});

function createResto(image, name, desc, location, rating) {
  const restos = JSON.parse(localStorage.restos ?? "[]");
  const restoObject = {
    id: (restos[restos.length - 1]?.id ?? 0) + 1,
    image: image,
    name: name,
    desc: desc,
    location: location,
    rating: rating,
    menu: [],
  };
  localStorage.restos = JSON.stringify([...restos, restoObject]);
  addRestoRow(restoObject);
}

function populateRestosTable() {
  const restos = JSON.parse(localStorage.restos ?? "[]");
  for (let i = 0; i < restos.length; i++) {
    const resto = restos[i];
    addRestoRow(resto);
  }
}

populateRestosTable();

function addRestoRow(resto) {
  const { id, image, name, desc, location, rating } = resto;
  // Row
  const restoRow = document.createElement("tr");
  restoRow.id = `resto_${id}`;
  restoRow.classList.add("resto_row");

  // Button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => deleteResto(id));

  restoRow.innerHTML += `<td>${id}</td>
  <td><img src="${image}" width="200"></td>
  <td>${name}</td>
  <td>${desc}</td>
  <td>${location}</td>
  <td>${rating}/5</td>`;
  const actionsCol = document.createElement("td");
  actionsCol.append(deleteBtn);
  restoRow.append(actionsCol);
  restosTable.append(restoRow);
}

function deleteResto(id) {
  const restos = JSON.parse(localStorage.restos ?? "[]");
  document.querySelector(`#resto_${id}`).remove();
  const restosFilter = restos.filter((resto) => resto.id != id);
  localStorage.restos = JSON.stringify([...restosFilter]);
}
