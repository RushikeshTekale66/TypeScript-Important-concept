"use strict";
//Creating class
class Person {
    //Constructor
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
//Object of the class
const person1 = new Person("Rushi", 23, ["Coding", "Bikeriding"]);
const person2 = new Person("Rohan", 21, ["mobile", "pubg"]);
console.log(person1);
console.log(person2);
