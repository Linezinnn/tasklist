function CreateTaskModel(task) {

    let taskModel = document.createElement("div")
    taskModel.classList = "TaskModel"
    taskModel.innerHTML = `
    
        <p>${task}</p>

    `

    return taskModel

}

export { CreateTaskModel }