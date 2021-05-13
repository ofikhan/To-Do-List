let newTask = document.querySelector('#addNewTask');
let form = document.querySelector('form');
let pendingTask = document.querySelector('#pendingTask');
let completedTask = document.querySelector('#completedTask');
let message = document.querySelector('.message');

let createTask = function(task){
    let taskItem = document.createElement('li');
    let checkboxItem = document.createElement('input');
    let labelItem = document.createElement('label');

    taskItem.className = 'pendingTaskItems';
    labelItem.innerText = task;
    checkboxItem.type = 'checkbox';

    taskItem.append(checkboxItem);
    taskItem.append(labelItem);

    return taskItem;
}

let addTask = function(event){
    event.preventDefault();
    if(newTask.value != ''){
        let taskItem = createTask(newTask.value);
        pendingTask.appendChild(taskItem);
        newTask.value = '';
        message.style.backgroundColor = 'Red';
        message.innerText = 'Task Added!';
        checkTask(taskItem, completeTask);
    }else{
        message.style.backgroundColor = 'Red';
        message.innerText = 'Task Cannot Be Empty!';
    }
}

let completeTask = function(){
    let taskItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    taskItem.removeAttribute('class');
    taskItem.className = 'completedTaskItems';
    taskItem.appendChild(deleteBtn);

    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completedTask.appendChild(taskItem);
    message.style.backgroundColor = 'Red';
    message.innerText = 'Task Completed!';
    checkCompletedTask(taskItem, deleteTask);
}

let deleteTask = function(){
    let taskItem = this.parentNode;
    let ul = taskItem.parentNode;
    ul.removeChild(taskItem);
    message.style.backgroundColor = 'Red';
    message.innerText = 'Task Deleted!';
}

let checkTask = function(taskItem, checkBoxClick){
    let checkedBox = taskItem.querySelector('input[type="checkbox"]');
    checkedBox.onchange = checkBoxClick;
}

let checkCompletedTask = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

let messageRemove = function(event){
    event.preventDefault();
    message.style.backgroundColor = 'initial';
    message.innerText = '';
}

newTask.addEventListener('click', messageRemove);

form.addEventListener('submit', addTask);
