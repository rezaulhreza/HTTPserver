// create an object 

// const Person ={

//     name:'Peter',
//     city:'London',
//     Age: '30'
// }

//create class Person
class Person{
//class constructor
constructor(name,city){
this.name=name;
this.name=city;
}


//printing the value of the constructor
greeting(){
    console.log(`This is a test and the element is ${this.name} and ${this.age}` )
}
}
//to export the file to somewhere else use this

module.exports = Person;