

let magicians:string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function make_great (magicianArray:string[]){

     for(let i = 0; i<magicianArray.length;i++){

      magicians[i] = 'The great ' + magicianArray[i]
     }
}

function show_magician(magician:string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

make_great(magicians);
show_magician(magicians);



