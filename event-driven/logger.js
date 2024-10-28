const fs = require('fs');
const os = require('os');

// events is different as it is a class and come up with different methods
const EventEmitter = require('events');

class Loggger extends EventEmitter{

    log(message){
        // creates a broadcast messsage
        this.emit('Server message', {message});
    }

}

const logger = new Loggger();

// datadog uses .log file extnesion for logging file
const logFile = './eventlog.txt';

// takes an event and appends it to the file 
const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}`;
    fs.appendFile(logFile, logMessage);
}

// constantly listening for an event named `message` , name should be same for emitter and logger
// after that call logToFile
logger.on('message', logToFile);

// This code emits an event after 3 seconds
setInterval(() => {
    const memoryUsage = os.freemem() / os.totalmem() * 100;
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000)

logger.log('application Started');
logger.log('application event occured');
logger.log('application event occured 2');
logger.log('application event occured 3');