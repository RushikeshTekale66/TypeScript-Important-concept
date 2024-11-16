

//Generics in TS
function longAndReturn<T>(value : T) : T{
    return value;
    
}

const numberResult : number = longAndReturn<number>(44);
console.log(numberResult);

const stringResult : string = longAndReturn<string>("Rushikesh");
console.log(stringResult);

const boolResult : boolean = longAndReturn<boolean>(true);
console.log(boolResult);


