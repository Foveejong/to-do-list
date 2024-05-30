export class Task {
    constructor(taskname, taskcategory, dueDate, dueTime, priority, index, complete) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.index = index;
        this.complete = complete;
    }

    editTask(taskname, taskcategory, dueDate, dueTime, priority) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
    }

    toggleComplete(bool) {
        return (bool) ? false : true;
    }

    changePriority(){
        // depends on what button user clicked
        // this.priority = "high";
        // this.priority = "middle";
        // this.priority = "low";
    }
}