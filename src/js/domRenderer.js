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
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.id)

    const taskNameElement = document.createElement('h2')
    taskNameElement.textContent = task.name

    const taskDescriptionElement = document.createElement('p')
    taskDescriptionElement.textContent = task.description

    const taskDateElement = document.createElement('p')
    taskDateElement.textContent = task.date

    const taskPriorityElement = document.createElement('p')
    taskPriorityElement.textContent = task.priority

    const editTaskButton = document.createElement('button')
    editTaskButton.textContent = 'Edit Task'

    const deleteTaskButton = document.createElement('button')
    deleteTaskButton.textContent = 'Delete Task'
    deleteTaskButton.addEventListener('click', () => deleteTaskCallback(task.id));

    taskDiv.appendChild(taskNameElement)
    taskDiv.appendChild(taskDescriptionElement)
    taskDiv.appendChild(taskDateElement)
    taskDiv.appendChild(taskPriorityElement)
    taskDiv.appendChild(editTaskButton)
    taskDiv.appendChild(deleteTaskButton)

    const Container = document.getElementById('todo-div');
    Container.appendChild(taskDiv);
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
