
function setTaskInfo(name, task){
    let taskInfo = localStorage.getItem('taskInfo') ?
    JSON.parse(localStorage.getItem('taskInfo')) : [];

    taskInfo.title = name;
    taskInfo.task.push(task);
    localStorage.setItem(name, JSON.stringify(taskInfo));
}
