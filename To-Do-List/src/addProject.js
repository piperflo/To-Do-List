function addProjects(){
    //const sideBar = document.getElementById('side-bar');
    var input = document.getElementById("input").value;

    const createProject = document.createElement('div');
    createProject.setAttribute('id', input);
    createProject.setAttribute('class', "project tabs");

    const createSpan = document.createElement('span');
    createSpan.textContent = input;

    const img = document.createElement('img');
    img.src = "../dist/images/fav.svg";

    createProject.appendChild(img);
    createProject.appendChild(createSpan);

    return createProject;
}

function getProjectName(){
    return document.getElementById("input").value;
}
/*
var taskInfo = {
    title: 'title',
    task: ["Name", "JyVon"]
}
taskInfo.task.push("Push");
taskInfo.task.push("Push Me");
function populateStorage() {
    localStorage.setItem("task", JSON.stringify(taskInfo));

    //localStorage.setItem("tasks", document.getElementById("font").value);
}
populateStorage();
var t = JSON.parse(localStorage.getItem("task"));

console.log(t);
*/
function storeProject(){
    localStorage.setItem("task", JSON.stringify(taskInfo.title));
    
}
export {addProjects, getProjectName};