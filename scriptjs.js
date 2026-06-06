function AddTask(){

    let task_name = document.getElementById("taskInput").value;

    if(task_name === ""){
        alert("Please enter a task");
        return;
    }

    let element = document.createElement("div");
    element.className = "task";

    let label = document.createElement("label");
    label.innerText = task_name;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function(){
        element.remove();
    };

    element.appendChild(label);
    element.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(element);

    document.getElementById("taskInput").value = "";
}
