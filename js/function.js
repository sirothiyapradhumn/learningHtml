// Function normal type
//function defination
/*
function add(a, b){
    console.log(a+b);
}

//function revoke
add(3,5);

*/

// function calculator (str, a, b){
//     if(str == 'add'){
//         return function add (){
//             console.log(a+b);
//         }
//     }
//     if(str == 'sub'){
//         return function add (){
//             console.log(a-b);
//         }
//     }
//     if(str == 'mul'){
//         return function add (){
//             console.log(a*b);
//         }
//     }
//     if(str == 'div'){
//         return function add (){
//             console.log(a/b);
//         }
//     }
// }

// let returnfunc  = calculator('add', 5, 2);
// let returnfunc1 = calculator('sub', 5, 2);
// let returnfunc2 = calculator('mul', 5, 2);
// let returnfunc3 = calculator('div', 5, 2);
// console.log("Return function is \n"+ returnfunc);
// returnfunc();
// returnfunc1();
// returnfunc2();
// returnfunc3();


//2nd type Function Expression

// let sayHi = function (){   //  -> this is called as expression
//     console.log("Hi i am function");
// }

// console.log("line no. 31 \n"+sayHi);

// sayHi(); // function invoking

/* o/p

line no. 31
function (){
    console.log("Hi i am function");
}
Hi i am function

*/

// 3rd type function IIFE -> imediately invoke function expression

let addIIFE = (function add(a,b){
    console.log(a+b);
})(20, 30);