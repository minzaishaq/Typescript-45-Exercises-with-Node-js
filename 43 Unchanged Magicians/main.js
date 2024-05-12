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
// Making a original copy of array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_Great_magicians = make_great(copy_magician_names);
// Show both arrays original and copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_Great_magicians);
