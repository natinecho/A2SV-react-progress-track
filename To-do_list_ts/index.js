var addTask = function () {
    var taskInput = document.getElementById("taskInput");
    if (taskInput) {
        var taskContainer_1 = document.getElementById("taskList");
        var myInput_1 = taskInput.value;
        taskInput.value = "";
        var liItem_1 = document.createElement("li");
        liItem_1.textContent = myInput_1;
        var divItem = document.createElement("p");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        deleteButton.onclick = function () { return taskContainer_1 === null || taskContainer_1 === void 0 ? void 0 : taskContainer_1.removeChild(liItem_1); };
        editButton.onclick = function () {
            taskInput.value = myInput_1 !== null && myInput_1 !== void 0 ? myInput_1 : "";
            taskContainer_1 === null || taskContainer_1 === void 0 ? void 0 : taskContainer_1.removeChild(liItem_1);
        };
        divItem.appendChild(editButton);
        divItem.appendChild(deleteButton);
        liItem_1.appendChild(divItem);
        taskContainer_1 === null || taskContainer_1 === void 0 ? void 0 : taskContainer_1.appendChild(liItem_1);
    }
};
