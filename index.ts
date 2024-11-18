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

class Student extends Person{
    gread : number;

    constructor (name : string, age:number, hobbies : string[], gread:number){
        super(name = name, age = age, hobbies = hobbies);
        this.gread = gread;
    }

    display() :string {
        return `I am ${this.name}, my age is ${this.age}, my hobbies are ${this.hobbies.join(", ")} & I am in gread ${this.gread}`;
    }
}

//Object of the class
const student : Student = new Student("Rushi", 23, ["Coding", "Bikeriding"], 10);

console.log(student);

