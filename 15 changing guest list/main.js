var guestList = ["Minza", "Ahmed", "Yahya", "Maliha"];
var dontCome = guestList[2];
console.log(dontCome, "He can not come");
guestList.splice(2, 3, "Farzeen");
guestList.forEach(function (guest) { return console.log("hello ".concat(guest, ", I am inviting you for dinner tonight at my place")); });
