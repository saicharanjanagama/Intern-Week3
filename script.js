document.getElementById("addTask").addEventListener("click", () => {
    let task = document.getElementById("taskInput").value;

    if (task == "") return alert("Enter a task");

    let li = document.createElement("li");
    li.innerText = task;

    // Mark task as done on click
    li.addEventListener("click", () => {
        console.log("LI clicked (task toggled)");
        li.classList.toggle("done");
    });

    // Ddelete button
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete-btn");
    del.onclick = (e) => {
        console.log("Delete button clicked");
        e.stopPropagation(); // Prevent marking as Done
        li.remove();
    };

    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    // Clear input box
    document.getElementById("taskInput").value = "";
});