"use strict";
const person1 = ["Rushi", 23, true];
console.log(person1);
//Touple
const displayInfo = (person) => {
    const [name, roll, hasId] = person;
    console.log(`Name : ${name}, roll no is ${roll} & hasId card ${hasId ? "Yes" : "No"}`);
};
const person = ["Rohan", 21, false];
displayInfo(person);
displayInfo(person1);
