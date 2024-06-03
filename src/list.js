import { Task } from "./Task";

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
        this.list = this.list.filter(task => task.index !== index)
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => +task.index === +index);
        return taskArr[0]
    }

    filterFinished = () => {
        this.list.filter(task => task.complete);
    }

    arrangePriority = () => {
        this.list.sort((a, b) => {
            return b.convertPriority(b.priority).length - a.convertPriority(a.priority).length
        })
    }
}

export { List }