// Creating a Guest List
let guestList = ["Minza", "Ahmed", "Yahya", "Maliha"];

// Making variable for that guest who can not come
let dontCome = guestList[2];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Ali");

// Print message for updated guest list
console.log("Updated list for our Guests");

// Sending an invitation to our guests one by one by their names
guestList.forEach(oneGuest => console.log(`Hello, ${oneGuest} I am inviting you to have dinner with me tonight at my place`)); 

// Inform that only two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on time so I can only invite two guests for dinner");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
    let removeGuests = guestList.pop();
    console.log(`Sorry, ${removeGuests} I can not invite you to dinner tonight`);
}

// Sending Invitation to the last two guests
console.log("Invitations to the last two guests");

guestList.forEach(lastTwo => console.log(`Luckily ${lastTwo}, You are still invited for dinner`));

// Removing Last Two guests from the list 
guestList.pop();
guestList.pop();

console.log("Empty the guest list:", guestList);