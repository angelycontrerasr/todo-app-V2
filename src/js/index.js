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
let allProjects = [];
let allTasks = [];
let projects = loadFromLocalStorage('projects');
let tasks = loadFromLocalStorage('tasks');

// Crear modales

const projectModalConfig = { // Renamed for clarity
    modalId: "new-project-modal",
    openButtonId: "open-new-project-modal",
    closeButtonSelector: "close-new-project-modal",
};

// Configuration for the task modal (without an initial openButtonId)
const taskModalConfig = {
    modalId: "new-task-modal",
    // We won't provide an openButtonId here because the button will be created dynamically per project
    closeButtonSelector: "close-new-task-modal",
};

// Create instance of the modals
const projectModal = createModal(projectModalConfig);
const taskModal = createModal(taskModalConfig); // This instance doesn't have an initial button

// Initialize the project modal
projectModal.initEventListeners();
// Renderizar proyectos y tareas existentes
projects.forEach(project => {
    displayProjectOnPage(project, taskModal, deleteProject);
});
tasks.forEach(task => {
    displayTaskOnPage(task, deleteTask);
});

// Agregar nuevo proyecto
const saveProjectButton = document.getElementById("save-project-button"); // Renamed for clarity

// Add an event listener to the save project button
saveProjectButton?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    const newProject = RetrieveProjectInfo();
    if (newProject) {
        allProjects.push(newProject);
        console.log("Project created:", newProject);
        console.log("All current projects:", allProjects);
        displayProjectOnPage(newProject); // Display the new project
        cleanProjectInputBoxesValue(); // Clear the input fields
        projectModal.close(); // Close the project creation modal
    } else {
        console.log("Failed to create project. Check input values.");
    }
});

// Agregar nueva tarea
const saveTaskButton = document.getElementById('save-task-button')
saveTaskButton?.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = retrieveTaskInfo()
    if (newTask) {
        console.log("Task Created", newTask)
        allTasks.push(newTask);
        taskModal.close();
        displayTaskOnPage(newTask);
        taskModal.currentProjectId = null;
        cleanTasksInputBoxesValue();
    } else {
        console.log("Failed to create task")
    }
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
