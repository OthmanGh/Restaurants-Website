// Check if admin is logged in
const loggedIn = localStorage.userId ?? 0;
if (loggedIn != -1) {
  window.location.replace("../user/login.html");
}
const users = JSON.parse(localStorage.users ?? "[]");

const usersTable = document.getElementById("users_table");

function populateUsersTable() {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    // Row
    const userDiv = document.createElement("div");
    userDiv.id = `user_${user.id}`;
    userDiv.classList.add("user_row");

    // Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => deleteUser(user.id));

    userDiv.innerHTML += `<div>${user.id}</div>
    <div>${user.name}</div>
    <div>${user.email}</div>
    <div>${user.password}</div>`;
    const actionsDiv = document.createElement("div");
    actionsDiv.append(deleteBtn);
    userDiv.append(actionsDiv);
    usersTable.append(userDiv);
  }
}

populateUsersTable();

function deleteUser(id) {
  const usersNew = JSON.parse(localStorage.users ?? "[]");
  document.querySelector(`#user_${id}`).remove();
  const usersFilter = usersNew.filter((user) => user.id != id);
  localStorage.users = JSON.stringify([...usersFilter]);
}
