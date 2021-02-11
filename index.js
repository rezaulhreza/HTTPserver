const http = require ('http')
const path = require ('path')
const fs  = require ('fs')

//Create a server object , putting that in a variable called server

// this is gonna take ina function with request and response
const server =http.createServer((req,res)  => {


    //this will hang the browser because it didn't get any response to the browser
    // console.log(req.url)

//     //directed to index
//     if(req.url==='/') {

//         fs.readFile(path.join(__dirname,'public','index.html'),
//         (err,content) => {
//             res.writeHead(200,{ 'Content-Type' : 'text/html'})
//             res.end(content)
//         }
//         )

   
//     }

//     if(req.url==='/about') {

//         fs.readFile(path.join(__dirname,'public','about.html'),
//         (err,content) => {
//             res.writeHead(200,{ 'Content-Type' : 'text/html'})
//             res.end(content)
//         }
//         )

   
//     }

//     if(req.url==='/api/users') {

// const users=[
//     { name:'Scott Turner', city: 'London'},
//     { name:'David Matt', city: 'Kent'}
// ]

// res.writeHead(200, { 'Content-Type' : 'application/json' } )

// //converting array of objects into json

//    res.end(JSON.stringify(users))
//     }


//Build file path




















});
//now this request needs to be listen on a port
// putting port inside a variable


// ITS GONNA FIRST LOOK AT THE ENVIRONMENT variable 
// if not found it will run on port 5000
const PORT = process.env.PORT || 5000

//CALLBACK WITH A CONSOLE LOG
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

