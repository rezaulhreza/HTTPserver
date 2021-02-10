//file system module
const fs = require ('fs')

const path = require ('path')

//create folder
//this is async, takes ina callback
// fs.mkdir(path.join(__dirname,'/demo'), {},err =>{
//     if(err) throw err;
//     console.log('Folder is created...');

// });

// //create and write to file straightaway
// // it Asynchronously writes data to a file, replacing the file if it already exists.


// fs.writeFile(path.join(__dirname,'/demo','hello.txt'),
//  'test done again ',
//  err =>{
//     if(err) throw err;
//     console.log('Folder is created and file written...');

// });


// //file append
// //Asynchronously append data to a file, 
// //creating the file if it does not exist.

// fs.appendFile(path.join(__dirname,'/demo','hello.txt'),
//  'test done once again',
//  err =>{
//     if(err) throw err;
//     console.log('Folder is created and file written...');

// });

// read file
fs.readFile(path.join(__dirname,'/demo','hello.txt'),'utf8', (err,data) =>{
    if(err) throw err;
    console.log(data);

});

//rename file

fs.rename(
    path.join(__dirname,'/demo','hello.txt'),
    path.join(__dirname,'/demo', 'hiWorld.txt'),
    err => 
    {
    if(err) throw err;
    console.log('Fil renamed');

}
);
