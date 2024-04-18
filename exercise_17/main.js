"use strict";
// Q16
let guests = ["Sami", "Nadeem", "Waseem"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Mohsin");
guests.splice(guests.length / 2, 0, "Hamza");
guests.push("Fahad");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("\n");
// Q17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guests => {
    console.log(`Dear ${guests}, you're still invited to dinner.`);
});
