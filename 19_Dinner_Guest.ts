
let Guest_List :string[] = ['Ayesha','Anum','Maryam'];

// for(let i=0; i<Guest_List.length; i++){ 

    // console.log('Dear Miss. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!' )


// }

let absent_Guest :string = 'Ayesha';

let new_Guest : string = 'Anaya';

Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){ 

    // console.log('Miss ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n' )


// }

// console.log(`Miss. ${absent_Guest}, 'is not coming to the party.`)

// console.log ('Good News! We find Big table so we are inviting 3 more guests.')

Guest_List.unshift('Aleeza'); // add at beginning of array
Guest_List.splice(2,0,'Mehak');  //add in between two elements
Guest_List.push('Sara'); //add at end of
// console.log (Guest_List)

// for(let i=0; i<Guest_List.length; i++){

    // console.log('Dear Miss. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }

// sorry guest for not inviting
// console.log('\nSorry we can not arrange big table, only two people will be invited.');

// yaha pr mene guest remove kiye hai
while(Guest_List.length > 2){
   let remove_guest = Guest_List.pop();
//    console.log (`Sorry Miss. ${remove_guest}, you are not invited anymore.`);
}
// hamare bache hoe 2 invited guest
// for(let i=0; i<Guest_List.length; i++){

    // console.log('Dear Miss. ' + Guest_List[i] +',\n\nYou are still invited.\n\nThank You\n\n')
// }

// mene sare guest array se remove kr diye
Guest_List.splice(0,2);
console.log(Guest_List)

// Exercise 19

    // print a message indicating the number of people you are inviting to dinner.

    console.log(`Total num of guest are ${Guest_List.length}`);