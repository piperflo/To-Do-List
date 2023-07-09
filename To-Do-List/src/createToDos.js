/*
function createToDo(name){
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'taskContainer');

    const projectHeader = document.createElement('h2');
    projectHeader.setAttribute('id', 'projectHeader');
    projectHeader.textContent = name;


    const taskList = document.createElement('div');
    taskList.setAttribute('id', 'taskList');

    const addTaskContainer = document.createElement('div');
    addTaskContainer.setAttribute('id', 'addTaskContainer');

    const addTaskButtonContainer = document.createElement('div');
    addTaskButtonContainer.setAttribute('id', 'addTaskButtonContainer');

    const addTask = document.createElement('div');
    addTask.setAttribute('id', 'addTaskButton');
    addTask.textContent = "Add Task";

    const img = document.createElement('img');
    img.src = "../dist/images/add_task.svg";

    addTaskButtonContainer.appendChild(img);
    addTaskButtonContainer.appendChild(addTask);
    
    addTaskContainer.appendChild(addTaskButtonContainer);

    taskContainer.appendChild(projectHeader);
    taskContainer.appendChild(taskList);
    taskContainer.appendChild(addTaskContainer);

    return taskContainer;
}

function createForm(){
    const modalForm = document.createElement('div');
    modalForm.setAttribute('id', 'modal-form2');

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.value = "";
    input.type = "text";
    input.id = "addT";
    input.name = "addT";
    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addTask');
    //addButton.setAttribute('onclick', "closeFormTask(event);");
    addButton.textContent = "Add";

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancelTask');
    //cancelButton.setAttribute('onclick', "closeFormTask();");
    cancelButton.textContent = "Cancel";

    buttons.appendChild(addButton);
    buttons.appendChild(cancelButton);

    form.appendChild(input);
    form.appendChild(buttons);
    modalForm.appendChild(form);
    console.log("Hello world 2")
    return modalForm;
}
export {createToDo, createForm};

*/