"use strict";
//public : Access only in class
//Parent Class
class Person {
    //Constructor
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 60 || age < 0) {
            throw new Error("You are retired");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("The age is undefined");
        }
        return this._age;
    }
}
const person = new Person("Rohan", ["Mobile", "Enjoy"]);
//set age
person.age = 10;
//get age
console.log(person.age);
