//public : Access only in class

//Parent Class
class Person{
      name : string;
      private _age : number | undefined;
      hobbies : string[];

     //Constructor
    constructor(name : string, hobbies : string[]){
        this.name = name;
        this.hobbies= hobbies;
    }

    public set age(age : number){
        if(age>60 || age<0){
            throw new Error("You are retired");
            
        }
        this._age = age;
    }

    public get age():number{
        if(this._age === undefined){
            throw new Error("The age is undefined");
        }
        return this._age;
    }
}

const person : Person = new Person("Rohan",["Mobile", "Enjoy"]);

//set age
person.age = 10;

//get age
console.log(person.age);

