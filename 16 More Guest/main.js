// Creating a Guest List
var guestList = ["Minza", "Ahmed", "Yahya", "Maliha"];
// Making variable for that guest who can not come
var dontCome = guestList[2];
// print the name of the guest who can not come
console.log(dontCome, "He can not come");
// Add or Remove values fron guest list array
guestList.splice(2, 3, "Farzeen");
// Message print for bigger table
console.log("Good News! we have found a Bigger Table for dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Hamiz");
// Adding a new guest at ending index of an Array
guestList.push("Hamza");
// Get a middle index for our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Ali");
// Print message for updated guest list
console.log("Updated list for our Guests");
// Sending an invitation to our guests one by one by their names
guestList.forEach(function (oneGuest) { return console.log("Hello, ".concat(oneGuest, " I am inviting you to have dinner with me tonight at my place")); });
