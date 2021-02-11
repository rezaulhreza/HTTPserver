
// //create object / cal Person.

// //calling files this way is common js
// //import is on es6/+

// const Person = require('./person')

// //instance of the object
// const Person1 = new Person('Test','20','24')


// /// assigning the method to the  object instance as the object's value
// //itself are the property of method greeting declared in person.js

// Person1.greeting();

const http = require ('http')
const path = require ('path')
const fs  = require ('fs')

//Create a server object , putting that in a variable called server

// this is gonna take ina function with request and response
const server =http.createServer((req,res)  => {


    //this will hang the browser because it didn't get any response to the browser
    // console.log(req.url)

    //directed to index
    if(req.url==='/'){
        res.end('<h1 align="center">Hello</h1><br><p>This is a test</p>')
    }

})
//now this request needs to be listen on a port
// putting port inside a variable


// ITS GONNA FIRST LOOK AT THE ENVIRONMENT variable 
// if not found it will run on port 5000
const PORT = process.env.PORT || 5000

//CALLBACK WITH A CONSOLE LOG
server.listen(PORT),() => CONSOLE.LOG('Server Running on port ' , PORT)

