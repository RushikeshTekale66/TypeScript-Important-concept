class Temperature{
    private _celsius : number = 0;

    public get celsius():number{
        return this._celsius;
    }

    public set celsius( newCelsius : number){
        this._celsius = newCelsius;
    }

    public get fahrenheit(): number{
        return (this._celsius*9)/5+32;
    }
}

const temperature = new Temperature();

temperature.celsius = 34;
console.log(temperature.fahrenheit);
