// Creating a array
var userNames = ["Minza", "Ahmed", "Admin", "Yahya", "Maliha"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    // Using forEach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
