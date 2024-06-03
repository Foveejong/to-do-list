import { Task } from "./Task";

function createNewTask(name, category, description, date, time, priority, index, completed) {
    return new Task(name, category, description, date, time, priority, index, completed)
}

export { createNewTask }