// let arr = [1,2,3,4];
// //output 1,4,9,16

// let square = [];

// square = arr.map(function(ele){
//     return ele*ele;
// })

// console.log(square);


//function calculator is a hof
function calculator(operator, a, b){
    if(operator  == "+"){
        return function add(){
            return a+b;
        };
    }
}

let fn = calculator("+", 4, 5);
console.log(fn);
var ans = fn();
console.log(ans);



//function programming
const arr = [2,5,8,6,78];

//calculate the area of square

let areaOfSquare = function(arr){
    let res =[];
    for(let i =0; i<arr.length; i++){
        res.push(arr[i] * arr[i]);
    }

    return res;
};

console.log(areaOfSquare(arr));

//calculate the perameter of square

let perimeterOfSquare = function(arr){
    let res =[];
    for(let i =0; i<arr.length; i++){
        res.push(4 * arr[i]);
    }

    return res;
};

console.log(perimeterOfSquare(arr));

//calculte the diagonal of square

let diagonalOfSquare = function(arr){
    let res =[];
    for(let i =0; i<arr.length; i++){
        res.push(Math.sqrt(2)*arr[i]);
    }

    return res;
};

console.log(diagonalOfSquare(arr));

//better way 

let area = function(a){
    return a * a;
}

let peremeter = function(a){
    return 4 * a;
}

let diagonal = function(a){
    return Math.sqrt(2) * a;
}

let calculate = function(arr, logic){
    let res =[];
    for(let i =0; i<arr.length; i++){
        res.push(logic(arr[i]));
    }

    return res;
};

console.log(calculate(arr, area));
console.log(calculate(arr, peremeter));
console.log(calculate(arr, diagonal));

//map 
//calculate area of square

let res = arr.map((a) =>{
    return a*a;
});

console.log(res);

//filter
//write a code to return an array of  even no.

let evenNo = arr.filter((num) => {
    // for even no. -> !(num % 2)
    // for odd no.  ->  num % 2
    return num % 2 == 0;
});

console.log(evenNo);

//reduce 
//write code to get sum of arr

let sumOfArray = arr.reduce((acc, num) => {
    return acc+num;
});

console.log(sumOfArray);

//Write a code to calculate largest element in arr
//const arr = [2,5,8,6,78];
//o/p -> 78

function largestElement(max, curr){
    if(curr>max){
        console.log("max " +max);
        console.log("curr "+ curr);
        max = curr;
    }

    return max;
}

var ans = arr.reduce(largestElement, -Infinity);
console.log(ans);


// ===============================================================

var users = [
    {firstName : "Sahil", lastName : "Siothiya", age: 55},
    {firstName : "Mayank", lastName : "Sharma", age: 25},
    {firstName : "Shivam", lastName : "Sahu", age: 15},
    {firstName : "Rahul", lastName : "Singh", age: 15},
];

//WAC to get fullName of all users
//o/p -> ['Sahil Siothiya', 'Mayank Sharma', 'Shivam Sahu', 'Rahul Singh']

function getFullName(obj){
    return obj.firstName + " "+ obj.lastName;
}

var ans = users.map(getFullName);
console.log(ans);

    //-> more simpler way
    console.log(users.map((obj) => obj.firstName +" "+ obj.lastName));


//WAC to return the number of people with a particular age
//o/p -> {15: 2, 25: 1, 55: 1}
// "bee in the knees"

function peopleAge(robj, cobj){
    let age = cobj.age;

    if(robj[age]){
        robj[age] = robj[age] + 1;
    }
    else{
        robj[age] = 1;
    }

    return robj;
}

var obj = users.reduce(peopleAge, {});
console.log(obj);

//occurance of letter in string or word
// o/p {H: 1, E: 1, L: 2, O: 1}
const word = "HELLO";
const split_string = word.split("");
console.log(split_string);

function occureance(robj, cobj){
    let ch = cobj;
    if(robj[ch]){
        robj[ch] = robj[ch] + 1;
    }
    else{
        robj[ch] = 1;
    }

return robj;
}

var obj = split_string.reduce(occureance, {});
console.log(obj);

// write a code to get firstname of all the users with age less than 30;
//o/p ['Mayank Sharma', 'Shivam Sahu', 'Rahul Singh']

var ans = users.filter((obj) => obj.age< 30);
console.log(ans);
var ans = ans.map(getFullName);
console.log(ans);


  // by using reduce
  var ans = users.reduce((arr, obj) => {
    if(obj.age < 30){
        arr.push(obj.firstName +" "+ obj.lastName);
    }
    return arr;
  }, []);

  console.log(ans);


