// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describ_city(city:string, country:string = 'default country.'){

    console.log(`${city} is  located in ${country}`);
}

describ_city('Karachi','Pakistan');
// Output : Karachi is  located in Pakistan

describ_city('Tokyo','Japan');
// Output : Tokyo is  located in Japan

describ_city('Paris') 
// Output : Paris is  located in default country