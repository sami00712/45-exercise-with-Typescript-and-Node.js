// Q14
var guests = ["Chaudhary", "Nadeem", "Waseem"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",would you like to join me for dinner?"));
});
console.log("\n");
// Q15
let unableToAttend = "Chaudhary";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Sami";
guests[guests.indexOf(unableToAttend)] = newGuest;

//  New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})