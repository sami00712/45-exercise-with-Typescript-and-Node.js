// Q16
let guests :string[] = ["Sami", "Nadeem", "Waseem"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Mohsin");
guests.splice(guests.length / 2, 0, "Hamza");
guests.push("Fahad");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})