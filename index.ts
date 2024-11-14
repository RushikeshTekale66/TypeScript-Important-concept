//Optional parameter denoted by "?"
let greet = (name : string , id?:number)=>{
    if(id){
        return `My name is ${name} & id is ${id}`;
    }
    else{
        return `My name is ${name}`;
    }
}

console.log(greet("Rushikesh"));
console.log(greet("Rushikesh", 44));

//Default parameter denoted by "="
let greet2 = (name : string , id:number = 10)=>{
    if(id){
        return `My name is ${name} & id is ${id}`;
    }
    else{
        return `My name is ${name}`;
    }
}

console.log(greet2("Rushikesh"));
console.log(greet2("Rushikesh", 44));


