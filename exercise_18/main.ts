// Q18

let places: string[] = ["Pakistan","Japan","Turkey","Iran","Iraq"];

console.log("Original order:",places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:",places);

console.log("Alphabetical order:", [...places].sort().reverse());

console.log("Original order:",places);

places.reverse();
console.log("Reversed order:",places);

places.reverse();
console.log("Original order:",places);

places.sort();
console.log("Alphabetical order:",places);

places.reverse();
console.log("Reverse alphabetical order:",places);
