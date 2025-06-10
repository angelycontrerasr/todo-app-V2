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
let allTasks = loadFromLocalStorage('tasks');
// Crear modales
let allProjects = loadFromLocalStorage('projects');
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
allProjects.forEach(project => {
    displayProjectOnPage(project, taskModal, deleteProject);
});
allTasks.forEach(task => {
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
        saveToLocalStorage('projects', allProjects); // 🔥 Aquí lo guardás
        console.log("Project created:", newProject);
        console.log("All current projects:", allProjects);
        displayProjectOnPage(newProject, taskModal, deleteProject);
        cleanProjectInputBoxesValue();
        projectModal.close();
    }
    else {
        console.log("Failed to create project. Check input values.");
    }
});

// Agregar nueva tarea
const saveTaskButton = document.getElementById('save-task-button')
saveTaskButton?.addEventListener("click", (e) => {
    e.preventDefault();

    const associatedProjectId = taskModal.currentProjectId;
    console.log('Project ID when saving task:', associatedProjectId); // Para depurar

    const newTask = retrieveTaskInfo(associatedProjectId)
    if (newTask) {
        console.log("Task Created", newTask)
        allTasks.push(newTask);
        saveToLocalStorage('tasks', allTasks);
        taskModal.close();
        displayTaskOnPage(newTask,  deleteTask);
        taskModal.currentProjectId = null;
        cleanTasksInputBoxesValue();
    } else {
        console.log("Failed to create task")
    }
});

// Eliminar proyecto y sus tareas
function deleteProject(projectId) {
    const projectElement = document.querySelector(`.project-item[data-project-id="${projectId}"]`);

    if (projectElement) {
        projectElement.remove();
        console.log(`Project with ID ${projectId} visually removed.`);
    } else {
        console.warn(`Project with ID ${projectId} not found in the DOM.`);
    }

    // 💥 Remove project from allProjects
    allProjects = allProjects.filter(p => p.id !== projectId);
    saveToLocalStorage("projects", allProjects);
    console.log(`Project with ID ${projectId} removed from allProjects and saved.`);

    // 💥 Delete all tasks associated with the project using deleteTask
    const associatedTasks = allTasks.filter(task => task.projectId === projectId);

    if (associatedTasks.length > 0) {
        associatedTasks.forEach(task => deleteTask(task.id));
        console.log(`Removed ${associatedTasks.length} tasks associated with project ${projectId}.`);
    } else {
        console.log(`No tasks found for project ${projectId} to remove.`);
    }
}

// Eliminar tarea
function deleteTask(taskId) {
    allTasks = allTasks.filter(task => task.id !== taskId);

    saveToLocalStorage("tasks", allTasks);
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
        console.log(`Task with ID ${taskId} visually removed.`);
    } else {
        console.warn(`Task with ID ${taskId} not found in the DOM.`);
    }
}
