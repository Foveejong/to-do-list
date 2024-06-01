import { Task } from "./Task";

function createNewTask(name, category, date, time, priority, index, completed) {
    return new Task(name, category, date, time, priority, index, completed)
}

export { createNewTask }