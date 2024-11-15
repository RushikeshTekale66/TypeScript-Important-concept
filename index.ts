type Student = {
    name: string,
    age: number,
    gender?: string,
    greet: (country: string) => string //methd call signature
}


const student: Student = {
    name: "Rushikesh",
    age: 23,
    greet: (country): string => `Welcome ${student.name} & age is ${student.age} I am from ${country}`
}

const student2: Student = {
    name: "Tekale",
    age: 21,
    greet: (country): string => `Welcome ${student2.name} & age is ${student2.age} I am from ${country}`
}

console.log(student.greet("India"));
console.log(student2.greet('India'));
