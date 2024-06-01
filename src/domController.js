import { List } from "./List";
// import { Task } from "./task";
import { createNewTask } from "./logic";
import pencil from "../svg/pencil.svg";
import dustbin from "../svg/trash-can-outline.svg";

function domController() {
    const toDoList = new List();
    initAddButton()

    // initial render
    displayTasks(toDoList)
    
    // editTaskDom()

    initForm(toDoList)
}

function initForm(toDoList) {
    const form = document.querySelector("form");
    form.addEventListener("submit", e => addTaskDom(toDoList))
}

function addTaskDom(toDoList) {
    // create task
    const form = document.querySelector("form");
    // form.addEventListener("submit", e => {
    const task = createNewTask(
        form.taskname.value, 
        form.taskcategory.value, 
        form.dueDate.value, 
        form.dueTime.value, 
        form.priority.value, 
        toDoList.list.length, 
        false)
    
    //reset form 
    form.reset()
    
    // append task to list
    toDoList.addTask(task);
    
    resetTaskDisplay();
        
    //reset page first then display all
    displayTasks(toDoList)
    // })
}

function displayTasks(toDoList) {
    toDoList.list.forEach((task, index) => {
        createTaskDom(toDoList, task, index);
    });
}

function displayModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

function resetTaskDisplay() {
    const projectCards = document.querySelector(".project-cards");

    projectCards.textContent = "";
}
 
function createTaskDom(toDoList, task, index) {
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

    priority.textContent = task.convertPriority(task.priority);
    taskName.textContent = task.taskname;
    dueDate.textContent = "Due: " + task.dueDate;
    taskCategory.textContent = task.taskcategory + " #";
    
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

    // init delete buttons
    initDeleteButton(toDoList, index, dustbinBtn);
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayModal);
}

function initDeleteButton(toDoList, index, btn) {
    btn.addEventListener("click", e => {
        // delete element
        e.target.closest(".tasks").remove();
        
        // update toDoList arr
        toDoList.deleteTask(index);

        resetTaskDisplay();

        displayTasks(toDoList);
    })
}

export { domController }