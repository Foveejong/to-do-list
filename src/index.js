import "./styles.css";
import { displayModal } from "./displayModal.js";


// have a [] to enumerate tasks and use data atrr to delete/edit

// const btn = document.querySelector(".add-task");

// document.addEventListener("DOMContentLoaded", e => {
//     document.querySelector("dialog").showModal();
// })


function toDoList() {
    // show the modal
    displayModal()

    // get user input details
    obtainDetails()

    // display task
}

toDoList()