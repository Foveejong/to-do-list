class List {
    // responsibilities related to list only
    static indexNumber = 0;
    
    constructor() {
        this.list = [];
    }
    
    addTask = (task) => {
        this.list.push(task);
        console.log("Add")
    }

    deleteTask = (index) => {
        this.list = this.list.filter(task => task.index !== index)
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => +task.index === +index);
        return taskArr[0]
    }

    shiftFinished = () => {
        this.list.forEach((task, index) => {
            if (task.complete) {
                this.list.push(task);
                this.list.splice(index, 1);
            }
        }) 
    }

    activeTasks = () => {
        return this.list.filter((task) => !task.complete)
    }

    arrangeActiveTasks = () => {
        let active = this.activeTasks();
        // sort active array
        active.sort((a, b) => {
            return b.convertPriority(b.priority).length - a.convertPriority(a.priority).length
        })  

        console.log(active);
        console.log(this.list.slice(active.length, this.list.length));

        // slice to find completed array and concat to active list
        this.list = active.concat(
            this.list.slice(active.length, this.list.length)
        )
    }

    sortCategory = (category) => {
        return this.list.filter(task => task.taskcategory === category)
    }

    sortDueDate = (dueDate) => {

    }
}

export { List }