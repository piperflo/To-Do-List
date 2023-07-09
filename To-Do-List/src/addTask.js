function addTaskToContainer(){
    //const addT = document.getElementById('addT').value;
    console.log("Adding a task");
    var input = document.getElementById("addT").value;

    const div = document.createElement('div');
    div.textContent = input;

    return div;
}

export {addTaskToContainer}