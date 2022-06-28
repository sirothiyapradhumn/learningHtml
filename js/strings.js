// sting is a sequence of characters

var str = "hello world";

console.log(str.length);

// slice method

var strSlice = str.slice(2, 7);   //2 sai print karega 6 tak
console.log(strSlice);

var strSlice = str.slice(6, -2);
console.log(strSlice);

// substring
var strsub = str.substr(2,6);
console.log(strsub);

// lowercase to upper case viseversa

var str = "fomo"
console.log(str.toUpperCase());

var str = "LOFO"
console.log(str.toLowerCase());

// concatenation method

let firstStr = "Believe in ";
let secondStr = "Yourself";

var str = console.log(firstStr+secondStr);

//concat method

var strng = firstStr.concat(secondStr);
console.log(strng);

// trim method -> it removed all white spaces from the string

var string = "                hello             world       welcome       JS  "

console.log(string);
console.log(string.trim());


export const key = "SHA-23402340";

export var exportedObj = {
    name: "sahil",
    age: 24,
}