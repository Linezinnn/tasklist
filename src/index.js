import { CreateTask } from "./usecases/CreateTask.js"

const buttonCreateTask = document.querySelector('#buttonCreateTask')

buttonCreateTask.addEventListener("click", () => CreateTask())