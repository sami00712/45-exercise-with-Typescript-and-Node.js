// Q24

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" =="apple");
// console.log("apple" == "Apple"); => False <= 

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() =="apple");

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5);
console.log(2 < 1); 

// Tests using "and" and "or" operators
console.log("Test with 'and' and 'or':");
console.log(true && false);
console.log(true || false);

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));