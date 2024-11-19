class MathOperations{
    //Static variable
    public static PI : number = Math.PI;

    //Static Method
    public static add(num1 : number, num2 : number):number{
        return num1+num2;
    }

    public static sub(num1 : number, num2 : number):number{
        return num1-num2;
    }
}

//Static member we can access direclty without creating object of the class

console.log(MathOperations.PI);
console.log(MathOperations.add(10, 10));
console.log(MathOperations.sub(20, 10));


