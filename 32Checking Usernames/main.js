// Array of current users
var current_users = ["Minza", "Ahmed", "Yahya", "Maliha", "ayesha"];
// Array of new users
var new_users = ["Ahsan", "Bano", "Ishaq", "Maliha", "Ayesha"];
// Loop through new_users to check the usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Making different message usin If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
