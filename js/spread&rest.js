//spread operator
// it is used to split up arr elemet or object properties

const nums = [1,2,3];
const newnum =[...nums,4];
console.log(newnum);
//[ 1, 2, 3, 4 ]
const newwNum = [nums];
console.log(newwNum, 4);
//[ [ 1, 2, 3 ] ] 4

const obj = {
    name: "mohit",
    age: 34
}

const nobj = {...obj, age:43}
console.log(nobj);
//{name: 'mohit', age: 43}
console.log(obj);
//{name: 'mohit', age: 34}


//rest operator 
//used to merge a list of function arguments into an array

function fun(...args){
    console.log(args);
    console.log(typeof args);

    args.forEach(arg => {
        console.log(arg);
    });
}

fun("hello", "how", 2, true);
// hello
// how 
// 2
// true








