
let myPromise = new Promise(function(resolve, reject){
    let num1 = 1;
    let num2 = 1;   // 1 or 2
    let string = "Value is equal to 2 ";
    if(num1 + num2 == 2){
        resolve(string);
    }
    else {
        reject("No, value are not equal");
    }
})

myPromise.then(function(string){
    console.log("in .then ", string);
})
.catch(function(err){
    console.log(err);
})