import { Task } from "./task";

class List {
    // responsibilities related to list only
    constructor() {
        this.list = [];
    }
    
    addTask = (task) => {
        this.list.push(task);
        console.log(this.list);
    }

    deleteTask = (index) => {
        this.list.splice(index, 1);
        console.log(this.list);
    }
}


export { List }