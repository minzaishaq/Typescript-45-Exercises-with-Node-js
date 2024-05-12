let guestList = ["Minza", "Ahmed", "Yahya", "Maliha"];

let dontCome = guestList[2];

console.log(dontCome, "He can not come");

guestList.splice(2, 3, "Farzeen");

guestList.forEach(guest => console.log(`hello ${guest}, I am inviting you for dinner tonight at my place`));