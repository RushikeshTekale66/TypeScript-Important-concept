

//Generics in TS
function add<T, U>(value1 : T, value2 : U){
    console.log(typeof value1);
    console.log(typeof value2);
}

add("Rushikesh", 44);
add(20, "Tekale");
add(true, 44);



