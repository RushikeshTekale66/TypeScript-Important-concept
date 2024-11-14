"use strict";
//Simple function
function simple(name, id) {
    console.log(`My name is ${name} & id is ${id}`);
}
simple("Rushi", 1);
//Arrow function
const arrow = (name, id) => {
    console.log(`My name is ${name} & id is ${id}`);
};
arrow("Rohan", 2);
//Arrow function with return type
const arrow2 = (name, id) => {
    return `My name is ${name} & id is ${id}`;
};
let ans = arrow2("Tushar", 3);
console.log(ans);
