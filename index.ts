type User = {
    name :string,
    age : number
}

type MyLocation = {
    city : string,
    country : string
}

const user : User = {name : "Rushikesh", age : 23};
const myLocation : MyLocation = {city : "Pune", country : "India"};

const createUserProfile : (user : User, myLocation : MyLocation) =>void = (user : User, myLocation : MyLocation) : void =>{
    console.log( `Name is ${user.name} & age is ${user.age}`);
    
}

createUserProfile (user, myLocation);