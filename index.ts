//Creating class
class Person{
     name : string;
     age : number;
     hobbies : string[];

     //Constructor
    constructor(name : string, age:number, hobbies : string[]){
        this.name = name;
        this.age = age;
        this.hobbies= hobbies;
    }
}

//Object of the class
const person1 : Person = new Person("Rushi", 23, ["Coding", "Bikeriding"]);
const person2 : Person = new Person("Rohan", 21, ["mobile", "pubg"]);

console.log(person1);
console.log(person2);

