let globalTaskIdCounter = 0;

export function Task(id, name, description, date, priority, projectId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.projectId = projectId;
}

export function retrieveTaskInfo(currentProjectId) {
    globalTaskIdCounter++;
    const name = document.getElementById('question-task-name').value;
    const description = document.getElementById('question-task-description').value;
    const date = document.getElementById('question-task-date').value;
    const priority = document.getElementById('question-task-priority').value;

    return new Task("Task" + globalTaskIdCounter, name, description, date, priority, currentProjectId);
}
