import { Task } from "./task";

class List {
    // responsibilities related to list only
    constructor() {
        this.list = [];
    }
    
    addTask = (task) => {
        this.list.push(task);
    }

    deleteTask = (index) => {
        this.list.splice(index, 1);
    }
}


export { List }