const fs = require("fs");

console.log("before");

//synchronous working
//let data = fs.readFileSync("f1.txt");

// //Async Working
// let data = fs.readFile("f1.txt", cb);
// function cb(err, data){
//     if(err){
//         console.log(err);
//     }
//     else console.log(data+"");
// }


//promises
let promisesThatFileWillBeRead = fs.promises.readFile("f1.txt");
console.log(promisesThatFileWillBeRead);
promisesThatFileWillBeRead.then(printData);
promisesThatFileWillBeRead.catch(printError);

console.log("after");

function printData(data){
    console.log("promise is fullfill");
    console.log(data+"");
}

function printError(err) {
    console.log(err);
}