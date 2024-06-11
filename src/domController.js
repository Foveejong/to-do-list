import { List } from "./List";
import { Storage } from "./Storage";
import { createNewTask, resetDisplayProperties } from "./logic";
import pencil from "../svg/pencil.svg";
import dustbin from "../svg/trash-can-outline.svg";
import sign from "../svg/format-list-text.svg";


function domController() {
    let toDoList;
    if (Storage.storageAvailable("localStorage") && localStorage.getItem("todolist")) {
        // overwrite List's tasklist and categorylist
        toDoList = Storage.getTaskList();
    } else {
        toDoList = new List();
        Storage.updateTaskList("todolist", JSON.stringify(toDoList));
    }


    initPermanentButtons();
    initAddButton();
    initAllTasksButton(toDoList);
    initToday(toDoList);

    // initial render
    displayAll(toDoList);

    initAddTaskForm(toDoList);

    initEditTaskForm(toDoList);
}

function initAddTaskForm(toDoList) {
    const form = document.querySelector(".add-task-form");
    form.addEventListener("submit", () => addTaskDom(toDoList))
}

function initEditTaskForm(toDoList) {
    const form = document.querySelector(".edit-task-form");
    form.addEventListener("submit", () => {
        // get data attr of form, which reflects item being changed
        const task = toDoList.findTask(form.getAttribute("data"));
        const oldCategory = task.taskcategory;
        
        task.editTask(form.tasknameEdit.value, 
            form.taskcategoryEdit.value, 
            form.descriptionEdit.value,
            form.dueDateEdit.value, 
            form.dueTimeEdit.value, 
            form.priorityEdit.value);

        // if old list does not include new category, include it
        if (!toDoList.categoryList.includes(form.taskcategoryEdit.value)) {
            toDoList.addCategory(form.taskcategoryEdit.value);
            initCategories(form.taskcategoryEdit.value, toDoList);
        }

        // if category changed, remove it
        toDoList.getRemainingCategories();
        toDoList.removeEmptyCategory(oldCategory)

        // update Storage
        Storage.updateTaskList(toDoList);
            
        form.reset();
        resetAllDisplay();
        displayAll(toDoList);
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
        crypto.randomUUID(), 
        false,
        true);

    // check if categories in sections, if not in, add and display
    if (!toDoList.categoryList.includes(form.taskcategory.value)) {
        toDoList.addCategory(form.taskcategory.value);
        initCategories(form.taskcategory.value, toDoList);
    }
    
    //reset form 
    form.reset()

    // append task to list
    toDoList.addTask(task);

    // update Storage
    Storage.updateTaskList(toDoList);
    
    resetAllDisplay();
    displayAll(toDoList);
}

function displayAll(toDoList) {
    // sort list first then display list
    toDoList.shiftFinished();
    toDoList.arrangeActiveTasks();

    toDoList.list.forEach((task) => {
        createTaskDom(toDoList, task);
    });

    toDoList.categoryList.forEach((category) => {
        initCategories(category, toDoList);
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

function resetAllDisplay() {
    const projectCards = document.querySelector(".project-cards");
    const categoryBtns = document.querySelector(".categories");
    projectCards.textContent = "";
    categoryBtns.textContent = "";
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
    tasks.setAttribute("data", task.uuid);
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

    // check completed
    if (task.complete) {
        tasks.classList.add("finished");
        checkbox.checked = true;
        checkbox.disabled = true;
        pencilBtn.disabled = true;
    }

    if (!task.display) {
        tasks.style.display = "none";
    }
    
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

    // init buttons
    initDeleteButton(toDoList, task.uuid, task, dustbinBtn);
    initEditButton(task.uuid, pencilBtn);
    initCaret(caret, descriptionSpace);
    initCheckBox(toDoList, task.uuid, checkbox);
}

function initPermanentButtons() {
    const alltasks = document.querySelector(".all-tasks-img");
    const today = document.querySelector(".today-img");

    alltasks.src = sign;
    today.src = sign;
}

function initAllTasksButton(toDoList) {
    const btn = document.querySelector("#all-tasks");
    const title = document.querySelector(".subtitle");
    btn.addEventListener("click", e => {
        resetDisplayProperties(toDoList);
        title.textContent = "All Tasks";

        resetAllDisplay();
        displayAll(toDoList);
    });
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayAddTaskModal);
}

function initDeleteButton(toDoList, uuid, task, btn) {
    btn.addEventListener("click", e => {
        // delete element
        e.target.closest(".tasks").remove();
        
        // update toDoList arr
        toDoList.deleteTask(uuid);

        // get the remaining categories
        toDoList.getRemainingCategories()
        toDoList.removeEmptyCategory(task.taskcategory)

        // update Storage
        Storage.updateTaskList(toDoList);

        resetAllDisplay();

        displayAll(toDoList);
    })
}

function initEditButton(uuid, btn) {
    const form = document.querySelector(".edit-task-form");
    btn.addEventListener("click", e => {
        // change data attr of form to reflect task being changed
        form.setAttribute("data", uuid);
        // show modal to input details
        displayEditTaskModal();
    })
}

function initCaret(caret, description) {
    caret.addEventListener("click", e => {
        description.style.display = (description.style.display === "block") ? "none" : "block";
    })
}

function initCheckBox(toDoList, uuid, btn) {
    btn.addEventListener("click", e => {
        // DOM strike through
        const closestTaskElement = e.target.closest(".tasks");
        closestTaskElement.classList.add("finished");

        // find task and update complete
        const task = toDoList.findTask(uuid);
        task.completeTask(btn);

        // update Storage
        Storage.updateTaskList(toDoList);

        resetAllDisplay();

        displayAll(toDoList);
    })
}

function initCategories(category, toDoList) {
    const categories = document.querySelector(".categories");
    const title = document.querySelector(".subtitle");

    // create button and append to the categories list
    const button = document.createElement("button");
    const span = document.createElement("span");
    const p = document.createElement("p");

    button.classList.add("categories-item");
    button.classList.add("sidebar-item");
    button.classList.add(category);
    span.classList.add("list-marker");
    p.classList.add("subheader");

    span.textContent = "#";
    p.textContent = category;

    button.appendChild(span);
    button.appendChild(p);

    categories.appendChild(button)

    // addeventlistener to sort categories
    button.addEventListener("click", e => {
        toDoList.sortCategory(category);
        title.textContent = category;

        resetAllDisplay();
        displayAll(toDoList);
    });
}

function initToday(toDoList) {
    const todayBtn = document.querySelector("#today");
    const title = document.querySelector(".subtitle");
    todayBtn.addEventListener("click", (e) => {
        toDoList.sortToday();
        title.textContent = "Today";
        resetAllDisplay();
        displayAll(toDoList);
    })
}

export { domController }