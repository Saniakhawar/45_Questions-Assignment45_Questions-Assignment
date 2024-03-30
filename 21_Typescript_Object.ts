// write a program that creates object containing these items.

// yaha hmne person k name ka object bnaya
// phr object ki property or values define ki
// property value ko hm  key value pair kehty hai

// data type of person object
interface person{
    age:number,
    name: string,
    nationality: string,
    profession:string,
    student:boolean,
}

// person object
let person = {
    age : 21,
    name : 'Sania Khawar',
    nationality : 'Pakistani',
    profession :'Software Developer',
    student : true
}
// print person object
console.log(person);


// data type of car object
interface car{
    brand:string;
    model:string;
    year: number;
    color:string;   
    automatic: boolean;  
}

// car object
let car = {
    brand:'Toyota',
    model : 'Camry',
    year : 2018,
    color: 'white',
    automatic: true
}

// print car object
console.log(car)