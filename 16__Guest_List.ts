
let Guest_List :string[] = ['Ayesha','Anum','Maryam'];

// for(let i=0; i<Guest_List.length; i++){ 

    // console.log('Dear Miss. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!' )


// }

let absent_Guest :string = 'Ayesha';

let new_Guest : string = 'Anaya';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){ 

    console.log('Miss ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n' )


}

console.log(`Miss. ${absent_Guest}, 'is not coming to the party.`)

console.log ('Good News! We find Big table so we are inviting 3 more guests.')

Guest_List.unshift('Aleeza'); // add at beginning of array
Guest_List.splice(2,0,'Mehak');  //add in between two elements
Guest_List.push('Sara'); //add at end of
console.log (Guest_List)

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Miss. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}