const inputValue : (value : string | number | boolean) =>void= (value : string | number | boolean ) : void =>{
    console.log(value);
}

inputValue("Rushi");
inputValue(123);
inputValue(true);