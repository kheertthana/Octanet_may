const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        
        // Create remove button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        listcontainer.appendChild(li);

        // Add event listener to the remove button
        span.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent the click event from propagating to the li element
            li.remove();
            saveData();
        });

        // Add event listener to the list item for crossing tasks
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
            saveData();
        });

        inputbox.value = "";
        saveData(); // Save the updated task list to local storage
    }
}

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
    let items = listcontainer.getElementsByTagName("li");
    for (let item of items) {
        // Add event listener to the remove button for existing tasks
        let span = item.querySelector("span");
        span.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent the click event from propagating to the li element
            item.remove();
            saveData();
        });

        // Add event listener to the list item for crossing existing tasks
        item.addEventListener("click", function() {
            item.classList.toggle("checked");
            saveData();
        });
    }
}

showtask();
