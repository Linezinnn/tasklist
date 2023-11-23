import { CreateTask } from "./usecases/CreateTask.js"
import { DeleteTask } from "./usecases/DeleteTask.js"

const buttonCreateTask = document.querySelector('#buttonCreateTask')

buttonCreateTask.addEventListener("click", () => {

    CreateTask()

    const deleteButtonsOfTask = document.querySelectorAll('.delete-task-btn')

    deleteButtonsOfTask.forEach((button) => {
        button.addEventListener("click", () => DeleteTask(button.id))
    })

})


