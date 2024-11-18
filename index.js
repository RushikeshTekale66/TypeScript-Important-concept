"use strict";
//Default = Access Anywhere
//Parent Class
class Person {
    //Constructor
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
//Child Class
class Student extends Person {
    constructor(name, age, hobbies, gread) {
        super(name = name, age = age, hobbies = hobbies);
        this.gread = gread;
    }
    display() {
        return `I am ${this.name}, my age is ${this.age}, my hobbies are ${this.hobbies.join(", ")} & I am in gread ${this.gread}`;
    }
}
//Outside the class
const person = new Person("Rohan", 21, ["Mobile", "Enjoy"]);
console.log(person.hobbies);
//Object of the class
const student = new Student("Rushi", 23, ["Coding", "Bikeriding"], 10);
console.log(student.hobbies);
