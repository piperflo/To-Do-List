//import { createHeader } from "./header";
import { addProjects} from "./addProject";
import { addTaskToContainer } from "./addTask";

import './style.css';

const addProject = document.getElementById("add-project");
const add = document.getElementById("add");
const close = document.getElementById("cancel");
const modalForm = document.getElementsByClassName("modal-form")[0];
const modalForm1 = document.getElementById("modal-form2");
const projectList = document.getElementById("project-list");
const header = document.getElementById("projectHeader");

const addTaskContainer = document.getElementById("addTaskContainer");

var items;
var itemsArray = [];
var all = document.getElementById("all");
var taskInfo = {
    title: '',
    task: []
}

addProject.addEventListener("click", openProjectForm);
close.addEventListener("click", closeForm);
add.addEventListener("click", addP);
addTaskContainer.addEventListener("click", openTaskFormContainer);
all.addEventListener("click", showAll);

modalForm.style.display = "none";
modalForm1.style.display = "none";

upDateTaskContainer("Default");

function showAll(){
    upDateTaskContainer("All");
    const taskList = document.getElementById("taskList");
    taskList.replaceChildren();
    Object.keys(localStorage).forEach((key) => {
        items = JSON.parse(localStorage.getItem(key));
        itemsArray.push(key);
        for(let i = 0; i < items.task.length; i++){
            taskList.appendChild(addTaskToContainer(items.task[i]));
            console.log(items.task[i]);
        }
    });
    addTaskContainer.style.display = "none";
}

function addP(event){
    event.preventDefault();
    const project = document.getElementById("input").value;
    var emptyObj = {
        title: project,
        task: []
    }
    if(project == ""){
        alert("No input");
        return
    }
    modalForm.style.display = "none";

    projectList.appendChild(addProjects(project));
    const taskList = document.getElementById("taskList");
    taskList.replaceChildren();
    upDateTaskContainer(project);

    localStorage.setItem(project, JSON.stringify(emptyObj));

    
}

function closeForm(event){
    event.preventDefault();
    modalForm.style.display = "none";
    console.log("Closed Form");
}

function openProjectForm(event){
    event.preventDefault();
    modalForm.style.display = "flex";
}

function upDateTaskContainer(name){
    header.textContent = name;
}

function openTaskFormContainer(event){
    //console.log("Opening task container");
    modalForm1.style.display = "flex";
}

//display();
//setDefault();

//fillProjectList()
function display(){
    Object.keys(localStorage).forEach((key) => {
        items = JSON.parse(localStorage.getItem(key));
        itemsArray.push(key);
        //console.log(key);
        projectList.appendChild(addProjects(items.title));
        //console.log(items);
        //var k = localStorage.getItem(key);
    });
    /*
    const project = "Default";
    var emptyObj = {
        title: project,
        task: []
    }

    projectList.appendChild(addProjects(project));
    const taskList = document.getElementById("taskList");
    taskList.replaceChildren();
    upDateTaskContainer(project);

    localStorage.setItem(project, JSON.stringify(emptyObj));
    */
}

function deleteTask(taskToDelete, taskObj){
    console.log(taskObj.task);
    for( var i = 0; i < taskObj.task.length; i++){ 
    
        if ( taskObj.task[i] === taskToDelete) {     
            taskObj.task.splice(i, 1); 
            localStorage.setItem(taskObj.title, JSON.stringify(taskObj));
            //const items = { ...localStorage };
            //console.log(items);
            var task = document.getElementById(taskToDelete);
            task.outerHTML = "";
            break
        }
    
    }
    //console.log(task);
    //console.log(document.getElementById(task));
    //console.log(task.textContent);

    //task.remove();
}

const it = { ...localStorage };
console.log(it);
/*
 Object.keys(localStorage).forEach((key) => {
    var items = JSON.parse(localStorage.getItem(key));
    console.log(items);

});
*///////////////////////////////////////////////////////////////////////////////////
localStorage.clear();
const today = "today";
const tomorrow = "tomorrow";

function setProjects(name){

}

function setTaskInfo(name, task){
    taskInfo.title = name;
    taskInfo.task.push(task);
    localStorage.setItem(name, JSON.stringify(taskInfo));
}


document.querySelectorAll(".project")
  .forEach(function(p) {
    p.addEventListener("click", function() {
        projects = document.querySelectorAll(".project");
        upDateTaskContainer(p.id);
    });
})

/**Check this to adjust tasklist */
projectList.addEventListener("click", (e) => {

    addTaskContainer.style.display = "flex";
    const taskList = document.getElementById("taskList");
    const target = e.target.innerText;
    console.log(target);
    taskList.replaceChildren();
    items = JSON.parse(localStorage.getItem(target));

    //itemsArray.push(key);
    console.log(target);
    console.log(e.target.innerText);

    for(let i = 0; i < items.task.length; i++){
        taskList.appendChild(addTaskToContainer(items.task[i]));
    }
    addTaskContainer.addEventListener("click", upDateTaskContainer(target));

    if (target === "Default"){
        console.log("Inside default")
        //main.replaceChildren();
        //main.appendChild(createToDo("Default"));
        //addTaskContainer.addEventListener("click", openTaskFormContainer);
    } 
});
main.addEventListener("click", (e) => {
    const target = e.target.innerText;
    var head = document.getElementById("projectHeader");
    const taskList = document.getElementById("taskList");
    console.log("Showing target: " + target);
    if (target === "Add"){
        
        //const taskContainer = document.getElementById("taskContainer");
        //console.log("Add task");
        e.preventDefault();

        var input = document.getElementById("addT").value;
        taskList.append(addTaskToContainer(input));

        taskInfo = JSON.parse(localStorage.getItem(head.textContent));
        //console.log(taskInfo);
        setTaskInfo(head.textContent, document.getElementById("addT").value);
        modalForm1.style.display = "none";

    } 
    //content.appendChild(createHomePage());
    if (target === "Cancel"){
        e.preventDefault();
        modalForm1.style.display = "none";
    } 
    if(e.target.checked){
        var taskToDelete = e.target.parentNode.textContent;
        var taskObj = JSON.parse(localStorage.getItem(head.textContent));
        deleteTask(taskToDelete, taskObj);
    }
});


//const e = document.querySelectorAll(".delete");
/*
.forEach(function(button) {
    console.log("Inside delete" + button);
    // Now do something with my button
});
*/
/*******************New logic above */
/*
const addProject = document.getElementById("add-project");
const modalForm = document.getElementsByClassName("modal-form")[0];
const modalForm1 = document.getElementById("modal-form2");
const add = document.getElementById("add");
const close = document.getElementById("cancel");
*/
//var modalForm1 ;

/*
var addTask ;
var closeTask ;
var addTaskContainer ;

const sideBar = document.getElementById('side-bar');
const main = document.getElementById('main');

addProject.addEventListener("click", openProjectForm);
close.addEventListener("click", closeForm);
add.addEventListener("click", addP);

//modalForm1.style.display = "flex";
console.log(modalForm);
console.log(modalForm1);
*/

window.onload = function () {
    const itemSet = (localStorage.getItem('Default') !== null);

    if (!itemSet)  {
        console.log("It doesn't exist");
        const project = "Default";
        var emptyObj = {
            title: project,
            task: []
        }

        projectList.appendChild(addProjects(project));
        //const taskList = document.getElementById("taskList");
        //taskList.replaceChildren();
        upDateTaskContainer(project);

        localStorage.setItem(project, JSON.stringify(emptyObj));
    }

    
    
};

