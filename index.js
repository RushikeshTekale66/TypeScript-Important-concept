"use strict";
//Generics in TS
function longAndReturn(value) {
    return value;
}
const numberResult = longAndReturn(44);
console.log(numberResult);
const stringResult = longAndReturn("Rushikesh");
console.log(stringResult);
const boolResult = longAndReturn(true);
console.log(boolResult);
