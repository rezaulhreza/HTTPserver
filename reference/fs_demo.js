//file system module
const fs = require ('fs')

const path = require ('path')

//create folder
//this is async, takes ina callback
// fs.mkdir(path.join(__dirname,'/demo'), {},err =>{
//     if(err) throw err;
//     console.log('Folder is created...');

// });

//create and write to file straightaway
// it Asynchronously writes data to a file, replacing the file if it already exists.


fs.writeFile(path.join(__dirname,'/demo','hello.txt'),
 'test done again',
 err =>{
    if(err) throw err;
    console.log('Folder is created and file written...');

});