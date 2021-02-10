const EventEmitter = require('events')

//class

class MyEmitter extends EventEmitter {}

//init obj

 const myEmitter = new MyEmitter()

 //create event listener

 //on event, puts a callback
 //anytime emitted, this is gonna run

 myEmitter.on('event',() => console.log('Event has been fired'))


 //init event

 // if event will not initiate if its not included
 myEmitter.emit('event')
 myEmitter.emit('event')
 myEmitter.emit('event')
 myEmitter.emit('event')

