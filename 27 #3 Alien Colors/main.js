// Define variable
var alienColor = "Green";
// First version
if (alienColor === "Green") {
    console.log("Version 1! the player earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "Reed") {
    console.log("the player earned 15 points.");
}
// Version 2
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alienColor2 === "Yellow") {
    console.log("Version 2! you shot down yellow alien you have earned 10 points");
}
else if (alienColor2 === "Red") {
    console.log("You shot down red alien you have earned 15 points");
}
// Version 3
var alienColor3 = "Red";
if (alienColor3 === "Yellow") {
    console.log("You shot down yellow alien you have earned 5 points");
}
else if (alienColor3 === "Green") {
    console.log("Version 2! you shot down green alien you have earned 10 points");
}
else if (alienColor3 === "Red") {
    console.log("Version 3! you shot down red alien you have earned 15 points");
}
