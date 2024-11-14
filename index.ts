let numbers: number[] = [1, 2, 3, 4, 5, 5];

//Map method
let doubleValue : number[] = numbers.map((value: number) => value*2)
console.log(doubleValue);


//Filter method
let evenNumber: number[] = numbers.filter((value)=>value%2==0);
console.log(evenNumber);

//Reduce method
let sum : number = numbers.reduce((sum, value)=>sum+=value);
console.log(sum);



