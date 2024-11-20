interface Stud1{
    name : string,
    age : number
}

interface Stud2{
    city:string,
    state:string
}

//Interface extends each other
interface Data extends Stud1, Stud2{};

//Class implements interface
class Biodata implements Data{
    constructor(
        public name : string,
        public age : number,
        public city : string,
        public state : string
    ){};
}

const data = new Biodata("Rushikesh", 23, "Pune", "Maharashtra");

console.log(data);


