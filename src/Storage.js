import { List } from "./List";
import { Task } from "./Task";

class Storage { 
  static storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  // JSON.parse(todolist) gives object, JSON.stringify(todolist) gives string

  static getTaskList() {
    const todolist = Object.assign(new List(), JSON.parse(localStorage.getItem("todolist")));

    // use map instead of foreach because foreach ALWAYS returns undefined, unlike map, which returns a new array with changes
    todolist.list = todolist.list.map(task => Object.assign(new Task(), task));

    return todolist
  }

  static updateTaskList(newtodolist) {
    localStorage.setItem("todolist", JSON.stringify(newtodolist))
  }
}

export { Storage }
  