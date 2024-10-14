
// isten for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', () => {

    // Invoke the addTask function on DOMContentLoaded
    loadTasks();

    // Select DOM Elements
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Create the addTask Function
function addTask() {

    // Task Creation and Removal
    const taskText = taskInput.value.trim();

    if (taskText) {

        const list = document.createElement('li');

        list.textContent = taskText;
    
        const button = document.createElement("button")
        button.textContent = "Remove";
        button.classList.add('remove-btn');
    
        list.appendChild(button)
        taskList.appendChild(list);
    
        button.addEventListener("click", function(){
            taskList.removeChild(list);
        });
    
        taskInput.value = '';
    } else {
        alert("Enter task")
    }

}

// Attach Event Listeners:
addButton.addEventListener("click", addTask);

//  allow tasks to be added by pressing the “Enter” key
taskInput.addEventListener("keypress",function(event){
    if (event.key == 'Enter'){
        addTask();
    }
});


});

function loadTasks() {
    
// check Local Storage for an existing list of tasks.
// Use localStorage.getItem('tasks') to retrieve the task list.
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
};