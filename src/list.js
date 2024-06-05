class List {
    // responsibilities related to list only
    
    constructor() {
        this.list = [];
    }
    
    addTask = (task) => {
        this.list.push(task);
    }

    deleteTask = (index) => {
        this.list = this.list.filter(task => task.index !== index)
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => task.index === index);
        return taskArr[0]
    }

    shiftFinished = () => {
        // go to first finished item and delete finished items
        this.list.forEach((task) => {
            if (task.complete) {
                this.list.splice(this.list.indexOf(task), 1);
                this.list.push(task);
            }
        }) 
    }

    activeTasks = () => {
        return this.list.filter((task) => !task.complete)
    }

    arrangeActiveTasks = () => {
        let active = this.activeTasks();
        const sliced = this.list.slice(active.length, this.list.length)


        // sort active array
        active.sort((a, b) => {
            return b.convertPriority(b.priority).length - a.convertPriority(a.priority).length
        })  

        // slice to find completed array and concat to active list
        this.list = active.concat(sliced)
    }

    sortCategory = (category) => {
        return this.list.filter(task => task.taskcategory === category)
    }

    sortDueDate = (dueDate) => {

    }
}

export { List }