// write 3 version of this program making sure each message is printed for the appropriate color alien.

//version 1
let alienColors: string = 'green';

// if the alien is green, print a message that the player earned 5 points.
// if the alien is green, print a message that the player earned 10 points.
// if the alien is green, print a message that the player earned 15 points.
if(alienColors === 'green'){
    console.log(" version 1: player earned 5 points.")       
}
else if(alienColors === "yelllow"){
    console.log("player earned 10 points.") 
}
else if(alienColors  ==='red'){
    console.log("player earned 15 points.") 
}
else{
    console.log("please select a valid color.")
}

// version 2
alienColors= "yellow";

if(alienColors === 'green'){
    console.log("player earned 5 points.")       
}
else if(alienColors === "yellow"){
    console.log(" version 2: player earned 10 points.") 
}
else if(alienColors  ==='red'){
    console.log("player earned 15 points.") 
}
else{
    console.log("please select a valid color.")
}         

// version 3
alienColors= "red";

if(alienColors === 'green'){
    console.log("player earned 5 points.")       
}
else if(alienColors === "yelllow"){
    console.log("player earned 10 points.") 
}
else if(alienColors  ==='red'){
    console.log(" version 3: player earned 15 points.") 
}
else{
    console.log("please select a valid color.")
}  