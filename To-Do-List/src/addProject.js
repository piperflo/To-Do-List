function addProjects(input){
    //const sideBar = document.getElementById('side-bar');
    //var input = document.getElementById("input").value;

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


export {addProjects, getProjectName};