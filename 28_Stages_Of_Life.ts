// variable of age.
let age: number = 25;
// if the person is less than 2 years old,print the message that the person is a baby.
// if the person is atleast 2 years old but less than 4, print the message that the person is a toddler.
// if the person is atleast 4 years old but less than 13, print the message that the person is a kid.
// if the person is atleast 13 years old but less than 20, print the message that the person is a teenager.
// if the person is atleast 2o years old but less than 65, print the message that the person is an adult.
// if the person is 65 or older, print the message that the person is an elder.

if(age < 2){
    console.log("person is a baby.");
}
else if(age >= 2 && age < 4){
    console.log("Person is a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("Person is a kid.");
}
else if(age >=13 && age < 20){
    console.log( "Person is a teenager.");
}
else if(age >=20 && age < 65){
    console.log( "Person is an adult");
}
else {
    console.log("person is an elder")
}