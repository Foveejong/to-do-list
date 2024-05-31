import { List } from "./List";
import { Task } from "./task";
import pencil from "../svg/pencil.svg";
import dustbin from "../svg/trash-can-outline.svg";

function domController() {
    const toDoList = new List();

    initAddButton()

    // initial render
    displayTasks(toDoList.list)
    

    addTaskDom(toDoList)
    
    // editTaskDom()
}

function addTaskDom(todolist) {
    // create task
    const form = document.querySelector("form");
    form.addEventListener("submit", e => {
        const task = createNewTask(
            form.taskname.value, 
            form.taskcategory.value, 
            form.dueDate.value, 
            form.dueTime.value, 
            form.priority.value, 
            todolist.list.length, 
            false)
        
        //reset form 
        form.reset()
        
        // append task to list
        todolist.addTask(task);
        
        resetTaskDisplay();
            
        //reset page first then display all
        displayTasks(todolist.list)
    })
}

function displayTasks(list) {
    list.forEach((task, index) => {
        createTaskDom(task, index);
    });
}

function displayModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}

function deleteTaskDom(list, index) {
    list.splice(index, 1);
}

function resetTaskDisplay() {
    const projectCards = document.querySelector(".project-cards");

    projectCards.textContent = "";
}

function createNewTask(name, category, date, time, priority, index, completed) {
    return new Task(name, category, date, time, priority, index, completed)
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
    initDeleteButton();
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayModal);
}

function initDeleteButton(list, index) {
    const deletebtn = document.querySelectorAll(".delete");
    deletebtn.addEventListener("click", e => {
        // delete element
        e.target.closest(".tasks").remove();
        
        // update todolist arr
        deleteTaskDom(list, index);
    })
}

export { domController }