"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    ;
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            console.log(`This is a ${this.color} circle with radius ${this.radius}`);
        };
    }
    ;
    calculateArea() {
        return this.radius * this.radius * Math.PI;
    }
}
const circle1 = new Circle("Red", 10);
console.log("Area of circle is :", circle1.calculateArea());
circle1.displayArea();
