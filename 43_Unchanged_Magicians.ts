// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians:string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function copyArray(Arr:string[]){
    return[...Arr]
}

function make_great (magicianArray:string[]){

     for(let i = 0; i<magicianArray.length;i++){

      magicianArray[i] = 'The great ' + magicianArray[i]
     }
}

function show_magician(magician:string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

const copymagicianArray = copyArray(magicians);

make_great(copymagicianArray);

console.log('\n\nThis is my original Array:');
show_magician(magicians);

console.log('\n\nThis is my modified copy of the Array:');
show_magician(copymagicianArray);


