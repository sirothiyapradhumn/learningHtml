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