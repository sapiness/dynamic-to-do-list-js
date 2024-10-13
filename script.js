

// listen for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', function (){


// Select elements
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// function for adding tasks
function addTask(){
 let taskText = taskInput.value.trim();

//  Check if taskText is not empty
 if (taskText.value = ""){
    alert("Enter task");

} else{
// task creation and removal{
const list = document.createElement('li');
list.textContent = taskText;



taskList.appendChild(list);
taskInput.value="";

} 

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress',function(event){
 
    if (event.key == 'Enter')
        addTask();

})

}

// Invoke the addTask function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', addTask);

// Loading Tasks from Local Storage:

function loadTasks() {
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
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});

})
