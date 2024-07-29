

const addTask =()=>{
    const myInput = document.getElementById("taskInput").value.trim()
    document.getElementById("taskInput").value = ""
    console.log(myInput)
    
    if(myInput !== ""){
        const myUl = document.getElementById("taskList")
    
        const myLi = document.createElement("li")
        myLi.textContent = myInput
        
        const text = document.createElement("p")
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        deleteButton.onclick =  () => myUl.removeChild(myLi)
        editButton.onclick =  () => {
            document.getElementById("taskInput").value = myInput
            myUl.removeChild(myLi)
        }

        text.appendChild(editButton)
        text.appendChild(deleteButton)
        myLi.appendChild(text)

        myUl.appendChild(myLi)

    }   
}