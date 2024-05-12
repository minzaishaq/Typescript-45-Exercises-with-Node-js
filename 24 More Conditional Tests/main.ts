// Define variables
let apple = "apple";
let uppercaseapple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

// Numeric tests
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

console.log("\nIs twenty is smaller than ten?");
console.log(twenty < ten);

console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\nIs twenty is less than 10?");
console.log(twenty <= 10);

// Tests using and & or operators

// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

// Using || (or)
console.log("\n 20 greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Tests whether an item is included in array or not
console.log("\n Is orange include in my first array");
console.log(fruits.includes("orange"));

console.log("\n Is orange not include in my first array");
console.log(fruits.includes("orange"));