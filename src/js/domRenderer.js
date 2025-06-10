export function displayProjectOnPage(project, taskModal, deleteProjectCallback) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.setAttribute('data-project-id', project.id);

    const name = document.createElement('h2');
    name.textContent = project.name;
    const description = document.createElement('p');
    description.textContent = project.description;

    const editButton = document.createElement('button');
    editButton.textContent = "Edit Project";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Project";
    deleteButton.classList.add('delete-project-button');
    deleteButton.addEventListener('click', () => deleteProjectCallback(project.id));

    const taskButton = document.createElement('button');
    taskButton.textContent = 'New Task';
    taskButton.addEventListener('click', () => {
        taskModal.open();
        taskModal.currentProjectId = project.id;
    });

    projectDiv.append(name, description, editButton, deleteButton, taskButton);
    document.getElementById('todo-div').appendChild(projectDiv);
}

export function displayTaskOnPage(task, deleteTaskCallback) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.id);

    const name = document.createElement('h2');
    name.textContent = task.name;
    const description = document.createElement('p');
    description.textContent = task.description;
    const date = document.createElement('p');
    date.textContent = task.date;
    const priority = document.createElement('p');
    priority.textContent = task.priority;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Task';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    deleteButton.classList.add('delete-task-button');
    deleteButton.addEventListener('click', () => deleteTaskCallback(task.id));

    taskDiv.append(name, description, date, priority, editButton, deleteButton);
    document.getElementById('todo-div').appendChild(taskDiv);
}

export function cleanProjectInputBoxesValue() {
    document.getElementById("question-project-name").value = "";
    document.getElementById("question-project-description").value = "";
}

export function cleanTasksInputBoxesValue() {
    document.getElementById("question-task-name").value = "";
    document.getElementById("question-task-description").value = "";
    document.getElementById("question-task-date").value = "";
    document.getElementById("question-task-priority").value = "";
}
