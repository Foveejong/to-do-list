import { Task } from "./Task";

function createNewTask(name, category, description, date, time, priority, uuid, completed, display) {
    return new Task(name, category, description, date, time, priority, uuid, completed, display)
}

function resetDisplayProperties(toDoList) {
    toDoList.list.forEach(task => {
        task.resetDisplay()
    });
}

export { createNewTask, resetDisplayProperties }