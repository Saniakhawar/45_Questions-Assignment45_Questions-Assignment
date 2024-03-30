// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



let magicians:string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function show_magician(magician:string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

show_magician(magicians)