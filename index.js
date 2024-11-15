"use strict";
const user = { name: "Rushikesh", age: 23 };
const myLocation = { city: "Pune", country: "India" };
const createUserProfile = (user, myLocation) => {
    console.log(`Name is ${user.name} & age is ${user.age}`);
};
createUserProfile(user, myLocation);
