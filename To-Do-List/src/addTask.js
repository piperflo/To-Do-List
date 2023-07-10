function addTaskToContainer(input){
    //const addT = document.getElementById('addT').value;
    console.log("Adding a task");
    //var input = document.getElementById("addT").value;

    const div = document.createElement('div');
    div.setAttribute('id', input);
    div.textContent = input;

    const X = document.createElement('input');
    X.setAttribute('type', 'radio');
    X.setAttribute('name', 'delete');
    X.setAttribute('class', "delete");
    X.setAttribute('value', "X");
    //X.textContent = "X";

    div.appendChild(X);
    return div;
}

export {addTaskToContainer}