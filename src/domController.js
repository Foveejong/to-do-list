import { List } from "./List";
import { Task } from "./task";
import pencil from "../svg/pencil.svg";
import dustbin from "../svg/trash-can-outline.svg";

function domController() {
    const toDoList = new List();
    toDoList.addTask();
    toDoList.addTask();
    toDoList.addTask();

    displayTasks(toDoList.list)

    // editTaskDom()

    // addTaskDom()

    // deleteTaskDom()

}

const displayTasks = (list) => {
    list.forEach((task, index) => {
        createTaskDom(task, index);
    });
    
}

function createTaskDom(task, index) {
    const projectCards = document.querySelector(".project-cards")

    const tasks = document.createElement("div");
    const priority = document.createElement("div");
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskContent = document.createElement("div");
    const taskName = document.createElement("p");
    const details = document.createElement("div");
    const dueDate = document.createElement("span");
    const dustbinBtn = document.createElement("input");
    const pencilBtn = document.createElement("input");
    const taskCategory = document.createElement("p");

    tasks.classList.add("tasks");
    tasks.setAttribute("data", index);
    priority.classList.add("priority", `${task.priority}`);
    taskbox.classList.add("task");
    checkbox.setAttribute("type", "checkbox");
    dustbinBtn.setAttribute("type", "image");
    pencilBtn.setAttribute("type", "image");
    taskContent.classList.add("task-content")
    details.classList.add("details")

    priority.textContent = task.priority;
    taskName.textContent = task.taskname;
    dueDate.textContent = "Due: " + task.dueDate;
    taskCategory.textContent = task.taskcategory;
    
    dustbinBtn.src = dustbin;
    dustbinBtn.name = "delete";
    dustbinBtn.id = "delete";
    dustbinBtn.classList.add("svg", "delete");

    pencilBtn.src = pencil;
    pencilBtn.name = "edit";
    pencilBtn.id = "edit";
    pencilBtn.classList.add("svg", "edit");

    details.appendChild(dueDate);

    taskContent.appendChild(taskName);
    taskContent.appendChild(details);

    taskbox.appendChild(checkbox);
    taskbox.appendChild(taskContent);
    taskbox.appendChild(dustbinBtn);
    taskbox.appendChild(pencilBtn);
    
    tasks.appendChild(priority);
    tasks.appendChild(taskbox);
    tasks.appendChild(taskCategory);

    projectCards.appendChild(tasks);
}

export { domController }