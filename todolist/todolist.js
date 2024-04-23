const list = document.getElementById('toDoList');
const completedList = document.getElementById('completedList');
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const selectButton = document.getElementById('selectButton');
const completeButton = document.getElementById('completeButton');

let newTask = (event) =>{
  event.preventDefault();
  let task = document.createElement('li');
  let check = document.createElement('input');
  check.type = 'checkbox';
  task.textContent = input.value;
  task.appendChild(check);
  list.appendChild(task);
  input.value = ''
}

let completedTask = (event) =>{
  event.preventDefault();
  let task = document.querySelectorAll('li');
  task.forEach(task =>{
    let checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked){
      task.removeChild(checkbox)
      completedList.appendChild(task)
    }
  })
}

let deleteTask = (event) =>{
  event.preventDefault();
  let task = document.querySelectorAll('li');
  task.forEach(task =>{
    let checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked){
      task.remove();
    }
  })
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