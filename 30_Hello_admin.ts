
const userNames:string[] = ['admin','bugs bunny','daffy duck','sylvester','tweety'];

// for(let i=0; i<userNames.length;i++){
  
//     if(userNames[i] === 'admin')
//     {
//         console.log('Hello admin, would you like to see a status report?');
//     }
//     else{
//         console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
//     }
// }        

// for each method.
userNames.forEach(userName => {
    if(userName ==='admin'){
        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`hello ${userName}, thank you for logging in again.`);
    }
})