//q1 read 3 file f1,f2,f3.txt serially using promises

//2nd way to overcome callbackhell -> is using promises

const fs = require("fs");

// let f1readpromise = fs.promises.readFile("f1.txt");

// function readf2file(data){
//     console.log(data +"");
//     let f2readPromise = fs.promises.readFile("f2.txt");
//     return f2readPromise;
// }

// function readf3file(data){
//     console.log(data + "");
//     let f3readPromise = fs.promises.readFile("f3.txt");
//     return f3readPromise;
// }

// function alldone(data){
//     console.log(data + "");
//     console.log("read all files serially");
// }

// f1readpromise
//     .then(readf2file)
//     .then(readf3file)
//     .then(alldone)
//         .catch(function (err){
//             console.log(err);
//         });


// q2. read 3 file f1, f2, f3 paralelly using promises

let f1readpromise = fs.promises.readFile("f1.txt");
let f2readpromise = fs.promises.readFile("f2.txt");
let f3readpromise = fs.promises.readFile("f3.txt");

f1readpromise.then(cb);
f2readpromise.then(cb);
f3readpromise.then(cb);

function cb(data){
    console.log(data + "");
}
