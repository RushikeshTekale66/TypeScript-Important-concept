//Default = Access Anywhere

//Parent Class
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

//Child Class
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

//Outside the class
const person : Person = new Person("Rohan", 21, ["Mobile", "Enjoy"]);
console.log(person.hobbies);



//Object of the class
const student : Student = new Student("Rushi", 23, ["Coding", "Bikeriding"], 10);
console.log(student.hobbies);

