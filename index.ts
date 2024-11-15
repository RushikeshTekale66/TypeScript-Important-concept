
//Touple in ts
type PersonInfo = readonly [string, number, boolean];

const person1 : PersonInfo = ["Rushi", 23, true];
console.log(person1);

//Touple
const displayInfo : (person:PersonInfo)=>void = (person: PersonInfo) : void=>{
    const [name, roll, hasId] = person;
    console.log(`Name : ${name}, roll no is ${roll} & hasId card ${hasId ? "Yes" : "No"}`);
    
}

const person: PersonInfo = ["Rohan", 21, false]; 
displayInfo(person)
displayInfo(person1);
