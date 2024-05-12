// Creating a function with parameters which returns the values in string
function city_country(city: string, country: string) :string{
    return `${city}, ${country}`;
}

// Calling a function and print the returned value

console.log(city_country("Lahore", "Pakistan"));

console.log(city_country("Istanbul", "Turkey"));

console.log(city_country("Berlin", "Germany"));