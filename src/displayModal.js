// display the modal when "add task" btn is pressed

function displayModal() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", e => document.querySelector("dialog").showModal());
}

export { displayModal }