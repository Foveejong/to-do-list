import { List } from "./List";
import { Task } from "./task";

function domController() {
    const list = new List();
    list.addTask();
    list.addTask();
    list.addTask();

    createTaskDom(list.list[0])


    displayTasks()

    // editTaskDom()

    // addTaskDom()

    // deleteTaskDom()

}

const displayTasks = () => {
    console.log(list)
}

function createTaskDom(task) {
    const projectCards = document.querySelector(".project-cards")
    projectCards.innerHTML += 
    `
    <div class="tasks">
        <div class="priority middle-priority">!!</div>
        <div class="task">
            <input type="checkbox" id="task2">
            <div class="task-content">
                <p>${task.taskname}</p>
                <div class="details">
                    <span>Due: ${task.dueDate}</span>
                </div>
            </div>
            <input type="image" src="../svg/trash-can-outline.svg" name="delete" class="svg delete" id="delete" />
            <input type="image" src="../svg/pencil.svg" name="edit" class="svg edit" id="edit" />
        </div>
        <p>${task.taskcategory} #</p>
    </div>
    `
}

export { domController }

