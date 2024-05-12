// Describe a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the function
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
