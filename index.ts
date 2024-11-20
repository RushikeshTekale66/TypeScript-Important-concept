const favHobbies = (hobby : string | string []):void[] |undefined=>{
    if(typeof hobby =='object'){
        return hobby.map((value)=>console.log(value)
        )
    }
    else{
        console.log(hobby);
        
    }
}

//Type narroying or Type of guards
favHobbies("Coding");
favHobbies(["Coding", "Bike Riding"]);