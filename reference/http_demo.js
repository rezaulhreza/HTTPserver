const http = require ('http')

//create server object
//taking http and calling create server
//it takes a function 
//in this case arrow function is used

http.createServer((req,res)  => {

    // upon getting a request write this response
    res.write('Testing')
    res.end()

    //in order to display this request it needs a port number

}).listen(5000, () => console.log('Working'))
   
//if the user enters
// localhost:5000 on the browser it should display the message
