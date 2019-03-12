
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

////////////////////////////////////////////////////////////

const ulTag = document.querySelector('ul');

const createTaskForm = document.querySelector('#create-task-form');

// const formText = form.elements.newTaskDescription;

createTaskForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const formDesc = e.target.querySelector('#new-task-description').value
	ulTag.innerHTML += `<li>${formDesc}</li>`
});