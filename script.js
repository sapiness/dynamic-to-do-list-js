

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
 if (taskText == ""){
    alert("Enter task");
}

// task creation and removal
if (!taskText == "" ){
let list = document.createElement('li');
list.textContent = taskText;

let button = document.createElement('button');
button.textContent = 'Remove';
button.className = 'remove-btn';

button.onclick = list.removeChild(taskList);
button.appendChild(list);
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

})
