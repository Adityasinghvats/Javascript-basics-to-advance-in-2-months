const fs = require('fs');

const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        // OS returns a data buffer
        const dataBuffer = fs.readFileSync(filePath);
        // converted to datajson format
        // datajson is different from json which is kinf of a string
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task)=>{
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
}

const showAllTasks = () => {
    const tasksLoaded = loadTasks();
    console.log(tasksLoaded);
}

const removeTask = (id) => {
    const tasks = loadTasks();
    // splice(start idx , upto which position)
    tasks.splice(id-1, 1);
    saveTasks(tasks);
}

// to make a command line argument at 2nd position and 3rd eg. node fileserver.js add "arguement"
const command = process.argv[2];
const arguement = process.argv[3];

if(command === "add"){
    addTask(arguement);
}else if(command === "show"){
    showAllTasks();
}else if(command === "remove"){
    // Server might send data in differnet format so we want it in int
    removeTask(parseInt(arguement));
}else{
    console.log("Command not found");
}


// commands
// node fileserver.js add "buy clothes"
// node fileserver.js show
// node fileserver.js remove 1