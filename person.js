// create an object 

// const Person ={

//     name:'Thomas',
//     city:'London',
//     Age: '30'
// }

//create class Person

// (function(exports,require,module,__filename,__dirname){

// })

// console.log(__dirname,__filename);

   
class Person {
//class constructor
constructor(name,city,age){
this.name=name;
this.city=city;
this.age= age;
}


//printing the value of the constructor
greeting(){
    console.log(`This is a test and the element is ${this.name} and ${this.age} and ${this.city}` );
}
}

//to export the file to somewhere else use this

module.exports = Person;