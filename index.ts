abstract class Shape {
    constructor(protected color: string) { };

    abstract calculateArea(): number;
    abstract displayArea: () => void;
}

class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color);
    };

    public calculateArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public displayArea = (): void => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
        
    };
}

const circle1 = new Circle("Red", 10);
console.log("Area of circle is :", circle1.calculateArea());

circle1.displayArea();
