let contador = 0 

function CreateTaskModel(task) {

    contador++

    let taskModel = document.createElement("div")
    taskModel.id = `task-${contador}`
    taskModel.classList = "TaskModel"
    taskModel.innerHTML = `
    
        <p>${task}</p>
        <button id="${contador}" class="delete-task-btn">Deletar</button>

    `

    return taskModel

}

export { CreateTaskModel }