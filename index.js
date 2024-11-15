"use strict";
var num;
(function (num) {
    num[num["one"] = 1] = "one";
    num[num["two"] = 2] = "two";
    num[num["three"] = 3] = "three";
})(num || (num = {}));
console.log(num.one);
console.log(num.two);
console.log(num.three);
var str;
(function (str) {
    str["north"] = "North";
    str["south"] = "South";
})(str || (str = {}));
console.log(str.north);
console.log(str.south);
