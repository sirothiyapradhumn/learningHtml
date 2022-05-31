let arr = [1,2,3,4];
//output 1,4,9,16

let square = [];

square = arr.map(function(ele){
    return ele*ele;
})

console.log(square);