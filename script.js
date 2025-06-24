function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('i');
  completeBtn.className = 'fas fa-check';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'fas fa-trash';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
