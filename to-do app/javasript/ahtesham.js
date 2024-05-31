function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input == "") {
      alert("Please enter a task!");
      return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
  
    // Add delete button
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("onclick", "deleteTask(this)");
    li.appendChild(deleteButton);
  }
  
  function deleteTask(element) {
    var li = element.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
  }
  