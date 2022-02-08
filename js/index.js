// starting JS -> JavaScript
// var, let, const

// variable declaration
var a ; // int, float, string

// var initalization
a = 10;

console.log(a);

a = "Hello"
console.log(a);

// typeof

console.log(typeof a);

// boollean type
a = true;
console.log(a);
console.log(typeof a);

a = null;
console.log(a);
console.log(typeof a);

//number 
var num = 10;
console.log(num);
var float = 2.5
console.log(float);

// boollean
var t = true;
var f = false;
console.log(t);
console.log(f);

// String
// ' ', " ", ``
// single quotes, double quotes, backticks
var str;
str = "How are you Doing? \nYUP i am fine. How about you?"
console.log(str);
str1 = `STR1 How are you Doing? 
YUP i am fine. How about you?`
console.log(str1);

//backticks
var num = 100;
console.log(`half of ${num} is ${num/2}`);

let l = 100;
console.log(l);

//let l = 200; //SyntaxError: Identifier 'l' has already been declared
//console.log(l);

l = 200;
console.log(l);

// loop s in js

var num = 10;
for(var i =1; i<=num; i++){
    if(i % 2 == 0){
        console.log("number is even "+i);
    }
}