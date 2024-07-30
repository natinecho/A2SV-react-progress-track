const addTask = () =>{
    const taskInput = document.getElementById("taskInput");
    if(taskInput){

        const taskContainer = document.getElementById("taskList");
        const myInput:string = (taskInput as HTMLInputElement).value;
        (taskInput as HTMLInputElement).value = ""

        const liItem = document.createElement("li")
        liItem.textContent = myInput

        const divItem = document.createElement("p")
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        deleteButton.onclick =()=> taskContainer?.removeChild(liItem)

        editButton.onclick =()=> {
            (taskInput as HTMLInputElement).value = myInput ?? ""
            taskContainer?.removeChild(liItem)
        }

        divItem.appendChild(editButton)
        divItem.appendChild(deleteButton)

        liItem.appendChild(divItem)
        taskContainer?.appendChild(liItem)
    }
}