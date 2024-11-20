"use strict";
;
//Class implements interface
class Biodata {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    ;
}
const data = new Biodata("Rushikesh", 23, "Pune", "Maharashtra");
console.log(data);
