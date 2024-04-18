// Q45

function make_car(
    manufacturer : string,
    model: string,
    ...options:any
) {
    const car = {manufacturer, model, ...Object.fromEntries(options)};
    return car;
};

let myCar = make_car("Toyota", "Corolla", ['color', 'blue'], ['year', 2023]);

console.log(myCar);
    