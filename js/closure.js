function outter(){
    var a = 10;
    function inner (){
        console.log(a);
    }
    return inner;
}

var z = outter();
console.log(z+" ");

z();