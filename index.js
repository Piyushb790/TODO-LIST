let input = document.querySelector(".input");
let btn = document.querySelector(".addButton");
let container = document.querySelector(".container");

function todo() {
  if (input.value.length > 0) {
    let item = document.createElement("h1");
    let item_input = document.createElement("input");
    const edit_button = document.createElement("button");
    const delete_button = document.createElement("button");
    const subContainer = document.createElement("div");
    //class
    subContainer.style.flexDirection = "row";
    edit_button.classList.add("editButton");
    delete_button.classList.add("deleteButton");
    item_input.classList.add("item_input");
    item.classList.add("item");
    edit_button.innerHTML = "Edit";
    delete_button.innerHTML = "Delete";
    item_input.style.backgroundColor = "white";
    item_input.style.padding = "10px";
    item_input.style.borderRadius = "10px";
    item_input.style.color = "black";
    item_input.style.visibility = "hidden";

    container.appendChild(subContainer);
    subContainer.appendChild(item);
    subContainer.appendChild(item_input);
    subContainer.appendChild(edit_button);
    subContainer.appendChild(delete_button);
    item.innerHTML = input.value;
    input.value = "";

    //Edi Button

    function editButton() {
      item_input.style.visibility = "visible";
      item.innerText = item_input.value;
      item_input.value = "";
      edit_button.textContent = "submit";
    }

    edit_button.addEventListener("click", editButton);

    //Delete Button

    function deleteBtn() {
      subContainer.remove();
    }

    delete_button.addEventListener("click", deleteBtn);
  }
  return;
}
todo();

btn.addEventListener("click", todo);
