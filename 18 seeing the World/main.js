var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an array of countries & print its original order 
var countriestovisit = ["Turkey", "Switzerland", "Thailand", "New York"];
console.log("Orignal Order:", countriestovisit);
// Print the array in alphabatical order without modifiying the actual array list 
console.log("Alphabetical Order:", __spreadArray([], countriestovisit, true).sort());
// Show that the array is still in its original order
console.log("Still in Original order:", countriestovisit);
// Print the array in reversed order without modifying the actual array list
console.log("Reverse order:", __spreadArray([], countriestovisit, true).reverse());
// Show that the array is still in its original order
console.log("Still in Original order:", countriestovisit);
// We have to change the Original array order now
console.log("Original array reversed:", countriestovisit.reverse());
// Print the array to show that it's back to it's original order 
console.log("Back to Original order:", countriestovisit.reverse());
// Print the array to show that it's order has been changed in alphabetical order
console.log("Sorted in alphabetical order:", countriestovisit.sort());
// We have changed again the original array order now in reverse order
console.log("Original array reversed again:", countriestovisit.reverse());
