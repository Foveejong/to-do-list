import { List } from "./List";
import { Task } from "./Task";
import { createNewTask } from "./logic";
import pencil from "../svg/pencil.svg";
import dustbin from "../svg/trash-can-outline.svg";

function domController() {
    const toDoList = new List();
    initAddButton();

    // initial render
    displayTasks(toDoList);

    initAddTaskForm(toDoList);

    initEditTaskForm(toDoList);
}

function initAddTaskForm(toDoList) {
    const form = document.querySelector(".add-task-form");
    form.addEventListener("submit", e => addTaskDom(toDoList))
}

function initEditTaskForm(toDoList) {
    const form = document.querySelector(".edit-task-form");
    form.addEventListener("submit", e => {
        // get data attr of form, which reflects item being changed
        const task = toDoList.findTask(form.getAttribute("data"));
        task.editTask(form.tasknameEdit.value, 
            form.taskcategoryEdit.value, 
            form.descriptionEdit.value,
            form.dueDateEdit.value, 
            form.dueTimeEdit.value, 
            form.priorityEdit.value);
            
        form.reset();
        resetTaskDisplay();
        displayTasks(toDoList);
    })
}

function addTaskDom(toDoList) {
    // create task
    const form = document.querySelector(".add-task-form");
    const task = createNewTask(
        form.taskname.value, 
        form.taskcategory.value, 
        form.description.value,
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
}

function displayTasks(toDoList) {
    // sort list first then display list
    toDoList.arrangePriority()
    toDoList.list.forEach((task) => {
        createTaskDom(toDoList, task);
    });
}

function displayAddTaskModal() {
    const dialog = document.querySelector(".add-task-dialog");
    dialog.showModal();
}

function displayEditTaskModal() {
    const dialog = document.querySelector(".edit-task-dialog");
    dialog.showModal();
}

function resetTaskDisplay() {
    const projectCards = document.querySelector(".project-cards");
    projectCards.textContent = "";
}
 
function createTaskDom(toDoList, task) {
    const projectCards = document.querySelector(".project-cards")

    const tasks = document.createElement("div");
    const priority = document.createElement("div");
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskContent = document.createElement("div");
    const taskName = document.createElement("p");
    const caret = document.createElement("div");
    const descriptionSpace = document.createElement("div");
    const details = document.createElement("div");
    const dueDate = document.createElement("span");
    const dustbinBtn = document.createElement("input");
    const pencilBtn = document.createElement("input");
    const taskCategory = document.createElement("p");

    tasks.classList.add("tasks");
    tasks.setAttribute("data", task.index);
    priority.classList.add("priority", `${task.priority}`);
    taskbox.classList.add("task");
    checkbox.setAttribute("type", "checkbox");
    dustbinBtn.setAttribute("type", "image");
    pencilBtn.setAttribute("type", "image");
    taskContent.classList.add("task-content");
    details.classList.add("details");
    descriptionSpace.classList.add("description-space");
    caret.classList.add("caret");

    priority.textContent = task.convertPriority(task.priority);
    taskName.textContent = task.taskname;
    descriptionSpace.textContent = "Description: " + task.description;
    dueDate.textContent = "Due: " + task.dueDate + " " + task.dueTime;
    taskCategory.textContent = `${task.taskcategory} #`;
    
    dustbinBtn.src = dustbin;
    dustbinBtn.name = "delete";
    dustbinBtn.id = "delete";
    dustbinBtn.classList.add("svg", "delete");

    pencilBtn.src = pencil;
    pencilBtn.name = "edit";
    pencilBtn.id = "edit";
    pencilBtn.classList.add("svg", "edit");

    details.appendChild(dueDate);
    details.appendChild(caret);
    details.appendChild(descriptionSpace);

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

    caret.addEventListener("click", e => {
        descriptionSpace.style.display = (descriptionSpace.style.display === "block") ? "none" : "block";
    })

    // init delete buttons
    initDeleteButton(toDoList, task.index, dustbinBtn);
    initEditButton(task.index, pencilBtn);
    initCheckBox(toDoList, task.index, checkbox);
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayAddTaskModal);
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

function initEditButton(index, btn) {
    const form = document.querySelector(".edit-task-form");
    btn.addEventListener("click", e => {
        // change data attr of form to reflect task being changed
        form.setAttribute("data", index);
        // show modal to input details 
        displayEditTaskModal();
    })
}

function initCheckBox(toDoList, index, btn) {
    btn.addEventListener("click", e => {
        // DOM strike through
        const closestTaskElement = e.target.closest(".tasks");
        closestTaskElement.classList.toggle("finished");

        // find task and update complete
        const task = toDoList.findTask(index);
        task.toggleComplete();
    })
}

export { domController }