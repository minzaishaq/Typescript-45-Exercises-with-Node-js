var guestsList = ["Maleeha", "Minza", "Ahmed", "Zubair", "Farzeen"];
guestsList.forEach(function (oneGuest) { return console.log("Hello ".concat(oneGuest, ", would you like to have dinner with me tonight?")); });
var lengthguests = guestsList.length;
console.log("We have invited total ".concat(lengthguests, " guests."));
