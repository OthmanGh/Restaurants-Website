const restoForm = document.getElementById("resto_form");
const restosTable = document.querySelector("#restos_table tbody");
const addRestoBtn = document.getElementById("add_resto_btn");
const addMenuItems = document.getElementById("resto_menu_items");
const addMenuItemsBtn = document.getElementById("add_menu_item_btn");
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

// Add menu items
addMenuItemsBtn.addEventListener("click", () => {
  addMenuItems.insertAdjacentHTML(
    "beforeEnd",
    `<div class="resto_menu_item flex j-s__between">
  <input
    type="text"
    placeholder="Menu Item Name"
    class="form-input menu-item-name"
  />
  <input
    type="number"
    step=".01"
    placeholder="Unit Price / $"
    class="form-input menu-item-price"
  />
</div>`
  );
});

function createResto(image, name, desc, location, rating) {
  const restos = JSON.parse(localStorage.restos ?? "[]");
  const items = getMenuItems();
  const restoObject = {
    id: (restos[restos.length - 1]?.id ?? 0) + 1,
    image: image,
    name: name,
    desc: desc,
    location: location,
    rating: rating,
    menu: items,
  };
  localStorage.restos = JSON.stringify([...restos, restoObject]);
  addRestoRow(restoObject);
}

function getMenuItems() {
  const items = [];
  const menuItemsInputs = document.querySelectorAll(".menu-item-name");
  const menuItemsPricesInputs = document.querySelectorAll(".menu-item-price");
  for (let i = 0; i < menuItemsInputs.length; i++) {
    const name = menuItemsInputs[i].value;
    const price = menuItemsPricesInputs[i].value;
    if (name.trim() !== "") {
      items.push({
        name: name,
        price: "$" + price,
      });
    }
  }
  return items;
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
  deleteBtn.classList.add("button", "delete-button");
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
