"use strict";
let numbers = [1, 2, 3, 4, 5, 5];
//Map method
let doubleValue = numbers.map((value) => value * 2);
console.log(doubleValue);
//Filter method
let evenNumber = numbers.filter((value) => value % 2 == 0);
console.log(evenNumber);
//Reduce method
let sum = numbers.reduce((sum, value) => sum += value);
console.log(sum);
