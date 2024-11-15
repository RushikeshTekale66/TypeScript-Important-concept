"use strict";
const student = {
    name: "Rushikesh",
    age: 23,
    greet: (country) => `Welcome ${student.name} & age is ${student.age} I am from ${country}`
};
const student2 = {
    name: "Tekale",
    age: 21,
    greet: (country) => `Welcome ${student2.name} & age is ${student2.age} I am from ${country}`
};
console.log(student.greet("India"));
console.log(student2.greet('India'));
