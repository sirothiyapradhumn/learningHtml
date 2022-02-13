// Function normal type
//function defination
/*
function add(a, b){
    console.log(a+b);
}

//function revoke
add(3,5);

*/

function calculator (str, a, b){
    if(str == 'add'){
        return function add (){
            console.log(a+b);
        }
    }
}

let returnfunc  = calculator('add', 2, 3);
console.log("Return function is \n"+ returnfunc);
returnfunc();


//2nd type Function Expression

let sayHi = function (){
    console.log("Hi i am function");
}

console.log("line no. 31 \n"+sayHi);

sayHi(); // function invoking

/* o/p

line no. 31
function (){
    console.log("Hi i am function");
}
Hi i am function

*/