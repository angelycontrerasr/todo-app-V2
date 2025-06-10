console.log('Happy developing ✨')
import "../styles.css";

import { createModal } from './modalFactory.js';
import { RetrieveProjectInfo } from './projectManager.js';
import { retrieveTaskInfo } from './taskManager.js';
import { saveToLocalStorage, loadFromLocalStorage } from './storage.js';
import {
    displayProjectOnPage,
    displayTaskOnPage,
    cleanProjectInputBoxesValue,
    cleanTasksInputBoxesValue
} from './domRenderer.js';

let projects = loadFromLocalStorage('projects');
let tasks = loadFromLocalStorage('tasks');

// Crear modales
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded 💪");

    const projectModal = createModal({
        modalId: "new-project-modal",
        openButtonId: "open-new-project-modal",
        closeButtonSelector: "close-new-project-modal"
    });
    const taskModal = createModal({
        modalId: "new-task-modal",
        openButtonId: "open-new-task-modal",
        closeButtonSelector: "close-new-task-modal"
    });

    projectModal.initEventListeners();
    taskModal.initEventListeners();
});
// Renderizar proyectos y tareas existentes
projects.forEach(project => {
    displayProjectOnPage(project, taskModal, deleteProject);
});
tasks.forEach(task => {
    displayTaskOnPage(task, deleteTask);
});

// Agregar nuevo proyecto
document.getElementById("submit-project").addEventListener("click", () => {
    const project = RetrieveProjectInfo();
    projects.push(project);
    saveToLocalStorage("projects", projects);
    displayProjectOnPage(project, taskModal, deleteProject);
    cleanProjectInputBoxesValue();
    projectModal.close();
});

// Agregar nueva tarea
document.getElementById("submit-task").addEventListener("click", () => {
    const task = retrieveTaskInfo(taskModal.currentProjectId);
    tasks.push(task);
    saveToLocalStorage("tasks", tasks);
    displayTaskOnPage(task, deleteTask);
    cleanTasksInputBoxesValue();
    taskModal.close();
});

// Eliminar proyecto y sus tareas
function deleteProject(projectId) {
    projects = projects.filter(project => project.id !== projectId);
    tasks = tasks.filter(task => task.projectId !== projectId);
    saveToLocalStorage("projects", projects);
    saveToLocalStorage("tasks", tasks);
    document.querySelector(`[data-project-id="${projectId}"]`).remove();
    document.querySelectorAll(`[data-task-id]`).forEach(taskEl => {
        const taskId = taskEl.getAttribute("data-task-id");
        const task = tasks.find(t => t.id === taskId);
        if (task && task.projectId === projectId) {
            taskEl.remove();
        }
    });
}

// Eliminar tarea
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveToLocalStorage("tasks", tasks);
    document.querySelector(`[data-task-id="${taskId}"]`).remove();
}
