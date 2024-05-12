// Define a function with a rest parameter that accepts items arguments representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items: \n");
    items.forEach(function (single_Item) { return console.log(single_Item); });
    console.log("\nEnjoy Your Sandwich");
}
// Call the function three times with different number of arguments
make_sandwich("Chicken", "Cheese", "MayoGarlic", "Jalapeno");
make_sandwich("Bread", "Cream cheese");
make_sandwich("Chicken", "Leettuce", "Cucumber", "Tikka Sauce", "Olives");
