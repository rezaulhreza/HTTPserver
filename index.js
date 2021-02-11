const http = require ('http')
const path = require ('path')
const fs  = require ('fs');
const { extname } = require('path');

//Create a server object , putting that in a variable called server

// this is gonna take in a function with request and response
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

//making the file path dynamic
//Build file path

//setting this will allow the user to land on index.html page 
//else whatever the url is

let filePath = path.join(__dirname,'public',
 req.url ==='/' ? 'index.html': req.url)

//  console.log(filePath)
//  res.end() 

//FILE EXTENSION
let extname = path.extname(filePath)

//INITIAL content type

let contentType = 'text/html'

//check file extension and set the content type accordingly

switch (extname) {
    case '.js':
        contentType = 'text/javascript'
        break;

        case '.css':
        contentType = 'text/css'
        break;


        case '.json':
        contentType = 'application/json'
        break;

        case '.jpg':
            contentType = 'image/png'
            break;
    

        case '.php':
        contentType = 'application/x-httpd-php'
        break;
}

//readFile

fs.readFile(filePath,(err,content) => {

    if(err){

        //if the error code is enoent
        if(err.code=='ENOENT'){
            //PAGE NOT FOUND
fs.readFile(path.join(__dirname,'public','404.html'),
(err,content) =>{

//write the file on the header and load it

res.writeHead(200, {  'Content-Type' : 'text/html' })

res.end(content, 'utf8')

})

}


        //else

        else{
            //error in server
res.writeHead(200)
res.end(`Server Error: ${err.code}`)
 }
} 
//if there is no error
else{
    //successful request and response
    res.writeHead(200, {  'Content-Type' : contentType })
    res.end(content, 'utf8')
}
})

});





//now this request needs to be listen on a port
// putting port inside a variable
// ITS GONNA FIRST LOOK AT THE ENVIRONMENT variable 
// if not found it will run on port 5000
const PORT = process.env.PORT || 5000

//CALLBACK WITH A CONSOLE LOG
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

