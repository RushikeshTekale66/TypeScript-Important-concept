//Write once & use it for multiple objet to define property
type Person = {
    name : string,
    age : number,
    address : {
        city : string, 
        country : string
    }
}

const person1 : Person= {
    name : "Rushikesh",
    age : 23,
    address : {
        city : "Pune",
        country : "India"
    }
}

console.log(person1);

const person2 : Person = {
    name : "Rohan",
    age : 21,
    address:{
        city:"Dharashiv",
        country:"India"
    }
}

console.log(person2);


