
let Guest_List :string[] = ['Ayesha','Anum','Maryam'];

for(let i=0; i<Guest_List.length; i++){ 

    console.log('Dear Miss. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!' )


}

let absent_Guest :string = 'Ayesha';

let new_Guest : string = 'Anaya';

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){ 

    console.log('Miss ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n' )


}

console.log(`Miss. ${absent_Guest}, 'is not coming to the party.`)
