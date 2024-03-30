
// Store the location in a array.Make sure the array is not in alphabetical order.
let places :string[] = ['Pakistan','Italy','America','Jermany','China'];

// Print your array in its original order.
console.log('original '+ places);

// Print your array in alphabetical orde without modifying the actual list.
console.log([...places].sort);

// Show that your an array is still in its original order by printing it.
console.log('original ' + places);

// Print your array is reverse alphabetical order without changing the order of the original list.
console.log('copy'  +[...places].sort().reverse());

// Show that your an array is still in its original order by printing it.
console.log('original '+ places);

// Reverse th order of your list.   Print the array to show that its order has changed.
console.log('original ' + places.reverse());

// Reverse th order of your list again. Print the list to show its's original order.
console.log('original ' +places.reverse());

// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original ' +places.sort());

// sort to change your array so it's  stored in reverse alphabetical order. Print the list to show that its order has changed.(
console.log (places.sort().reverse());