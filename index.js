"use strict";
//public : Access only in sub class & class
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
        console.log(this.name);
    }
}
//Outside the class
const person = new Person("Rohan", 21, ["Mobile", "Enjoy"]);
//Object of the class
const student = new Student("Rushi", 23, ["Coding", "Bikeriding"], 10);
