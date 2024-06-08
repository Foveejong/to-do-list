class List {
    // responsibilities related to list only
    
    constructor() {
        this.list = [];
        this.categoryList = []
    }
    
    addTask = (task) => {
        this.list.push(task);
    }

    deleteTask = (uuid) => {
        this.list = this.list.filter(task => task.uuid !== uuid)
    }

    findTask = (uuid) => {
        const taskArr = this.list.filter((task) => task.uuid === uuid);
        return taskArr[0]
    }

    shiftFinished = () => {
        const finished = [];
        const active = [];
        // go to first finished item and delete finished items
        this.list.forEach((task) => {
            if (task.complete) {
                finished.push(task);
            } else {
                active.push(task)
            }
        }) 
        this.list = active.concat(finished);
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

    // check if tasks are part of clicked category
    sortCategory = (category) => {
        const categorised = [];
        const notCategorised = [];
        this.list.forEach((task) => {
            if (task.taskcategory.toLowerCase() === category.toLowerCase()) {
                task.display = true;
                categorised.push(task);
            } else {
                task.display = false;
                notCategorised.push(task);
            }
        }) 
        this.list = categorised.concat(notCategorised)
        console.log(this.list);
    }

    getRemainingCategories = () => {
        const remaining = [];
        this.list.forEach((task) => {
            if (!remaining.includes(task.taskcategory)) remaining.push(task.taskcategory);
        })
        this.categoryList = remaining;
    }

    addCategory = (category) => {
        this.categoryList.push(category);
    }

    sortToday = () => {
        const currentDate = new Date()
        const todayArr = [];
        const notTodayArr = [];
        this.list.forEach((task) => {
            // set hours to the same so that solely date is compared
            const date = new Date(task.dueDate);
            if (date.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0)) {
                task.display = true;
                todayArr.push(task);
            } else {
                task.display = false;
                notTodayArr.push(task);
            }
        }) 
        this.list = todayArr.concat(notTodayArr);
    }
}

export { List }