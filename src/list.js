import { Task } from "./task";

class List {
    // responsibilities related to list only
    constructor() {
        this.list = [];
    }
    
    addTask = () => {
        const task = createTask(this.list.length);
        this.list.push(task);
        console.log(this.list);
    }

    deleteTask = (index) => {
        this.list.splice(index, 1);
        console.log(this.list);
    }
}

const createTask = (index) => {
    return new Task("a", "a", "22-04-2024", 2359, "high", index, false)
}

export { List }