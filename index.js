"use strict";
class MathOperations {
    //Static Method
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
}
//Static variable
MathOperations.PI = Math.PI;
//Static member we can access direclty without creating object of the class
console.log(MathOperations.PI);
console.log(MathOperations.add(10, 10));
console.log(MathOperations.sub(20, 10));
