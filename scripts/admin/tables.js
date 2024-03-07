function addRow(
  type = "user",
  id = 0,
  data = [],
  table,
  deleteFunc = () => {}
) {
  // Row
  const row = document.createElement("tr");
  row.id = `${type}_${id}`;

  // Button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button", "delete-button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => deleteFunc(id));
  
  // Iterate through data
  for(let i = 0; i < data.length; i++) {
    const dataType = data[i].type ?? "text";
    switch(dataType) {
      case "text":
        row.innerHTML += `<td>${data[i].data}</td>`
        break;
      case "image":
        row.innerHTML += `<td><img src="${data[i].data}" width="200"></td>`
        break;
    }
  }
  
  const actionsCol = document.createElement("td");
  actionsCol.append(deleteBtn);
  row.append(actionsCol);
  table.append(row);
}
