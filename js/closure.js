// function outter(){
//     var a = 10;
//     function inner (){
//         console.log(a);
//     }
//     return inner;
// }

// var z = outter();
// console.log(z+" ");

// z();

function outter(){
    var a = 10;
    function inner (){
        console.log(a);
    }
    a = 7;
    return inner;
}

var z = outter();
console.log(z+" ");

z(); // o/p 7