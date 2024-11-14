const checkPalindrome = (str : string): boolean=>{
    let palin = str.split("").reverse().join("");
    return str==palin;
}

let result = checkPalindrome("123321");
console.log(result);
