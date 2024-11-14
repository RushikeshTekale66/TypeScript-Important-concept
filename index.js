var checkPalindrome = function (str) {
    var palin = str.split("").reverse().join("");
    return str == palin;
};
var result = checkPalindrome("123321");
console.log(result);
