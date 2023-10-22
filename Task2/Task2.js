function createTask() {
    let newItem = document.createElement('LI');
    newItem.textContent = taskTitle.value;
    list.append(newItem);
    taskTitle.value = "";
}

function checkTask(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('done');
    }
}


const btn = document.querySelector('.btn');
const taskTitle = document.querySelector('.taskTitle');
const list = document.querySelector('.list');


btn.addEventListener('click', function(evt) {
    createTask();
});

list.addEventListener('click', function(evt) {
    checkTask(evt);
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        createTask();
    }
});
