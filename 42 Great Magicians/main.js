// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// funtion to make magicians great through .map() it will modify the array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing each magicians name
var magician_names = ["Smith", "Lila", "Poter"];
// Call make_great function to modify magicians name
var great_magicians = make_great(magician_names);
// Call show_magicians that shows modified list of magicians
show_magicians(great_magicians);
