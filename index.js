
// //create object / cal Person.

// //calling files this way is common js
// //import is on es6/+

// const Person = require('./person')

// //instance of the object
// const Person1 = new Person('Test','20','24')


// /// assigning the method to the  object instance as the object's value
// //itself are the property of method greeting declared in person.js

// Person1.greeting();


const Logger = require ('./logger')

//Logger is a class so class instance needs to be created

const logger = new Logger()

logger.on('test', (data) => console.log('called listener', data))

//call log method

logger.log('Test done')