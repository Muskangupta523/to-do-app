const input = document.getElementById("in");
const ListCont = document.getElementById("list");

function addtask() {
    if (input.value === "") {
        alert("plz write your task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ListCont.appendChild(li);

        createButtons(li);

        input.value = "";
        saveData();
    }
}

ListCont.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.classList.contains("edit")) {
        editTask(e.target.parentElement);
        saveData();
    }
}, false);

function editTask(taskElement) {
    let newText = prompt("Edit task:", taskElement.textContent);
    if (newText !== null) {
        taskElement.innerHTML = newText;

        // Recreate buttons after editing
        createButtons(taskElement);

        saveData();
        
    }
}

function createButtons(parentElement) {
    let spanDelete = document.createElement("span");
    spanDelete.innerHTML = "\u00d7";
    spanDelete.className = "delete";
    parentElement.appendChild(spanDelete);

    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = "&#9998;";
    spanEdit.className = "edit";
    parentElement.appendChild(spanEdit);
}

function saveData() {
    localStorage.setItem("data", ListCont.innerHTML);
}

function listshow() {
    ListCont.innerHTML = localStorage.getItem("data");
}

listshow();
