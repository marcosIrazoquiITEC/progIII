const list = document.getElementById('toDoList');
const completedList = document.getElementById('completedList');
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const selectButton = document.getElementById('selectButton');
const completeButton = document.getElementById('completeButton');

const saveTasksToLocalStorage = () => {
  localStorage.setItem('toDoListTasks', list.innerHTML);
  localStorage.setItem('completedListTasks', completedList.innerHTML);
};

const loadTasksFromLocalStorage = () => {
  const toDoListTasks = localStorage.getItem('toDoListTasks');
  if (toDoListTasks) {
    list.innerHTML = toDoListTasks;
  } else {
    list.innerHTML = ''; // Limpia la lista si no hay tareas en localStorage
  }

  const completedListTasks = localStorage.getItem('completedListTasks');
  if (completedListTasks) {
    completedList.innerHTML = completedListTasks;
  } else {
    completedList.innerHTML = ''; // Limpia la lista si no hay tareas en localStorage
  }
};

loadTasksFromLocalStorage();

let newTask = (event) =>{
  event.preventDefault();
  let task = document.createElement('li');
  let check = document.createElement('input');
  check.type = 'checkbox';
  task.textContent = input.value;
  task.appendChild(check);
  list.appendChild(task);
  input.value = '';
  saveTasksToLocalStorage();
}

let completedTask = (event) =>{
  event.preventDefault();
  let task = document.querySelectorAll('li');
  task.forEach(task =>{
    let checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked){
      task.removeChild(checkbox)
      completedList.appendChild(task)
      saveTasksToLocalStorage();
    }
  });
}

let deleteTask = (event) =>{
  event.preventDefault();
  let task = document.querySelectorAll('li');
  task.forEach(task =>{
    let checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked){
      task.remove();
      saveTasksToLocalStorage()
    }
  });
}

let selectAllTask = (event) => {
  event.preventDefault();
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
  });
}

addButton.addEventListener('click',newTask)
completeButton.addEventListener('click',completedTask)
selectButton.addEventListener('click',selectAllTask)
deleteButton.addEventListener('click',deleteTask)