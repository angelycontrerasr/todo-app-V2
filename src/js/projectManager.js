let globalProjectIdCounter = 0;

export function Project(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
}

export function RetrieveProjectInfo() {
    globalProjectIdCounter++;
    const name = document.getElementById("question-project-name").value;
    const description = document.getElementById("question-project-description").value;
    return new Project("Project" + globalProjectIdCounter, name, description);
}