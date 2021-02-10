const { dirname } = require('path')
const path = require ('path')

//Base file name
// this would give the entire path along with the file name
console.log(__filename)

//this would give the file name only]

console.log(path.basename(__filename))

//directory only
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//create path object
// gives root dir base extension and file name
console.log(path.parse(__filename))
 
//concatenate path
console.log(path.join(__dirname,'/demo','index.php'))



