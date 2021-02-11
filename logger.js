const EventEmitter = require('events')

// the uuid creates an universal and unique identifier
const uuid = require('uuid')

// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())
// console.log(uuid.v4())

//class logger

class Logger extends EventEmitter{

    //method log which takes in a message
    log(msg){

         //call event
        this.emit('test',{id:uuid.v4(), msg})
    }
}

// module.exports = Logger


// const Logger = require ('./logger')

//Logger is a class so class instance needs to be created

const logger = new Logger()

logger.on('test', (data) => console.log('called listener', data))

//call log method with unique id

logger.log('Test done')
logger.log('Test done')
logger.log('Test done')
logger.log('Test done')
logger.log('Test done')
logger.log('Test done')
