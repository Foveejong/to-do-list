export class Task {
    constructor(taskname, taskcategory, dueDate, dueTime, priority, index, complete) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = this.getPriority(priority);
        this.index = index;
        this.complete = complete;
    }

    editTask(taskname, taskcategory, dueDate, dueTime, priority) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = this.getPriority(priority);
    }

    getPriority(priority) {
        if (priority === "high") {
            return "!!!"
        } else if (priority === "middle") {
            return "!!"
        } else {
            return "!"
        }
    }

    toggleComplete(bool) {
        return (bool) ? false : true;
    }
}