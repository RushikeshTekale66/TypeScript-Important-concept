//public : Access only in class

//Parent Class
class Person{
     private name : string;
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

    display() {
        
        
    }
    
}

//Outside the class
const person : Person = new Person("Rohan", 21, ["Mobile", "Enjoy"]);



//Object of the class
const student : Student = new Student("Rushi", 23, ["Coding", "Bikeriding"], 10);


