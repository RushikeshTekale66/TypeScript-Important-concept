"use strict";
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
}
const temperature = new Temperature();
temperature.celsius = 34;
console.log(temperature.fahrenheit);
