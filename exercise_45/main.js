"use strict";
// Q45
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    const car = { manufacturer, model, ...Object.fromEntries(options) };
    return car;
}
;
let myCar = make_car("Toyota", "Corolla", ['color', 'blue'], ['year', 2023]);
console.log(myCar);
