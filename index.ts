let numbers : number[] = [1, 2, 3, 4, 5, 5];


//for loop
for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    
}

//for of 
for(let num of numbers){
    console.log(num);
    
}

//for each
numbers.forEach((num : number)=>console.log(num))





