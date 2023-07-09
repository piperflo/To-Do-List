//import { createHeader } from "./header";
import { addProjects, getProjectName} from "./addProject";
import { createToDo, createForm } from "./createToDos";
import { addTaskToContainer } from "./addTask";

import './style.css';

const sideBar = document.getElementById('side-bar');
const addProject = document.getElementById("add-project");
const add = document.getElementById("add");
const close = document.getElementById("cancel");
const modalForm = document.getElementsByClassName("modal-form")[0];
const modalForm1 = document.getElementById("modal-form2");
const projectList = document.getElementById("project-list");
const header = document.getElementById("projectHeader");
const taskList = document.getElementById("taskList");
const addTaskContainer = document.getElementById("addTaskContainer");

var projects = document.querySelectorAll(".project");

var p = document.querySelectorAll(".project");
var addTask ;
var closeTask ;

var taskInfo = {
    title: '',
    task: []
}

addProject.addEventListener("click", openProjectForm);
close.addEventListener("click", closeForm);
add.addEventListener("click", addP);
addTaskContainer.addEventListener("click", openTaskFormContainer);

modalForm.style.display = "none";
modalForm1.style.display = "none";

upDateTaskContainer("Default");

function addP(event){
    event.preventDefault();
    //const taskContainer = document.getElementById("taskContainer");
    modalForm.style.display = "none";

    projectList.appendChild(addProjects());
    
    //projects = document.querySelectorAll(".project");
    const project = document.getElementById("input").value;
    upDateTaskContainer(project);

    
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
    console.log("Updating header");
    header.textContent = name;
}

function openTaskFormContainer(event){
    console.log("Opening task container");
    addTask = document.getElementById("addTask");
    closeTask = document.getElementById("cancelTask");
    modalForm1.style.display = "flex";
}



localStorage.clear();
const today = "today";
const tomorrow = "tomorrow";

var taskInfo = {
    title: '',
    task: []
}
//taskInfo.title = today;
//taskInfo.title = tomorrow;
//taskInfo.task.push(today);
//taskInfo.task.push(tomorrow);
function setTaskInfo(name, task){
    taskInfo.title = name;
    taskInfo.task.push(task);
    localStorage.setItem(name, JSON.stringify(taskInfo));
}

function setHeader(name) {
    taskInfo.title = name;
    localStorage.setItem(name, JSON.stringify(taskInfo.title));

    //localStorage.setItem("tasks", document.getElementById("font").value);
}

function setTasks(task) {
    taskInfo.task.push(task);
    localStorage.setItem(task, JSON.stringify(taskInfo));

    //localStorage.setItem("tasks", document.getElementById("font").value);
}


setTaskInfo(today, "Task");
setTaskInfo(today, "Task2");
setTaskInfo(today, "Task3");

setTaskInfo(tomorrow, "TaskIn");
setTaskInfo(tomorrow, "TaskOut");
var t = JSON.parse(localStorage.getItem(today));
console.log(t);

var ts = JSON.parse(localStorage.getItem(tomorrow));
console.log(ts);

const items = { ...localStorage };
console.log(items);

/*
setHeader(today);
setTasks("Task");
var t = JSON.parse(localStorage.getItem(today));
console.log(t);

setHeader(tomorrow);
setTasks("Task2");
var ts = JSON.parse(localStorage.getItem(tomorrow));
console.log(ts);
*/
//var t = JSON.parse(localStorage.getItem(today));
//var ts = JSON.parse(localStorage.getItem(tomorrow));

//console.log(t);
//console.log(ts);

/*
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
  } else {
    // Too bad, no localStorage for us
  }
  */
/*
document.addEventListener("click", (e) => {
    //console.log("Entered Side-bar");
    //arrClass = document.querySelectorAll(".project");
    projects = document.querySelectorAll(".project");
    console.log(projects);
    //projects = document.getElementsByClassName("project");
});
*/

document.querySelectorAll(".project")
  .forEach(function(p) {
    p.addEventListener("click", function() {
        projects = document.querySelectorAll(".project");
        console.log(projects);
        upDateTaskContainer(p.id);
    });
})

projectList.addEventListener("click", (e) => {
    const target = e.target.innerText;
    addTaskContainer.addEventListener("click", upDateTaskContainer(target));
    /*if (target === "Default"){
        main.replaceChildren();
        //main.appendChild(createToDo("Default"));
        //addTaskContainer.addEventListener("click", openTaskFormContainer);
    } */
});
main.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Add"){
        const taskList = document.getElementById("taskList");
        //const taskContainer = document.getElementById("taskContainer");
        console.log("Add task");
        e.preventDefault();

        taskList.append(addTaskToContainer());
        modalForm1.style.display = "none";
        //addTask.addEventListener("click", addFormTask);
    } 
    //content.appendChild(createHomePage());
    if (target === "Cancel"){
        e.preventDefault();
        modalForm1.style.display = "none";
    } 
});


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

window.onload = function () {
    
    addTaskContainer = document.getElementById("addTaskContainer");
    if (addTaskContainer) {
        addTaskContainer.addEventListener("click", openTaskFormContainer);
        
    }
    
};


modalForm.style.display = "none";
modalForm1.style.display = "none";

function openTaskFormContainer(event){
    console.log("Opening task container");
    addTask = document.getElementById("addTask");
    closeTask = document.getElementById("cancelTask");
    //modalForm1 = document.getElementById("modal-form2");
    modalForm1.style.display = "flex";
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

//check this
function addP(event){
    event.preventDefault();
    const taskContainer = document.getElementById("taskContainer");
    modalForm.style.display = "none";
    //we want to replace the list and the header
    sideBar.appendChild(addProjects());
    taskContainer.replaceChildren();
    //addTaskContainer = document.getElementById("addTaskContainer");
    taskContainer.appendChild(createToDo(getProjectName()));
}
//main.replaceChildren();
main.prepend(createToDo("Default"));



//Check this 
sideBar.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Default"){
        main.replaceChildren();
        main.appendChild(createToDo("Default"));
        //addTaskContainer.addEventListener("click", openTaskFormContainer);
    } 
});


main.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Add"){
        const taskList = document.getElementById("taskList");
        //const taskContainer = document.getElementById("taskContainer");
        console.log("Add task");
        e.preventDefault();

        taskList.append(addTaskToContainer());
        modalForm1.style.display = "none";
        //addTask.addEventListener("click", addFormTask);
    } 
    //content.appendChild(createHomePage());
    if (target === "Cancel"){
        e.preventDefault();
        modalForm1.style.display = "none";
    } 
  });

//alert("Hello World");
*/