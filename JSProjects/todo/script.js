document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        renderTask(task);
    });

    addTaskBtn.addEventListener('click', ()=> {
        const taskText = todoInput.value.trim();
        if(taskText === "") return;
        const newTask = {
            id: Date.now(),
            text : taskText,
            completed : false
        }
        tasks.push(newTask);
        renderTask(newTask);
        saveTask();
        // clear input
        todoInput.value = "";
        // console.log(tasks);
    });

    function renderTask(task){
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if(task.completed) li.classList.add("completed");
        li.innerHTML = `
        <span>${task.text}:${task.completed}</span>
        <button>Delete</button>
        `
        li.addEventListener("click", (e) => {
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTask();
        });
       
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopImmediatePropagation(); 
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            saveTask();
        });

        todoList.appendChild(li);
    }

    function saveTask(){
        // local storage is used through browser api
        // first argument is string and second argument is a value with string type
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})