// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwiches(item: string[]) {
   console.log('Making your sandwicheswith:');

   item.forEach(element => console.log("-" + element));

   console.log('Enjoy your sandwich !');
}

makeSandwiches(['Ham','cheese','lettuce']);

makeSandwiches(['Turkey','Bacon']);

makeSandwiches(['Peanut butter','spicses']);