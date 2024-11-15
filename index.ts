type Person = {
    name : string,
    age : number
}

type Employee = {
    emp_id : number,
    department : string 
}

type EmployDetails = Person & Employee;

const employee : EmployDetails = {
    name : "Rushikesh",
    age : 123,
    emp_id : 1,
    department:"Computer"
}

console.log(employee);
