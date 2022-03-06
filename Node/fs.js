// fs -> file System module

const fs = require("fs"); // require(Path_of_File)

const abc = require("../js/temp");

let ans = abc.add(45,4);
console.log(ans);

let res = fs.appendFileSync("f1.txt", "Hello i am F1 file");
fs.appendFileSync("f1.txt", "\nyou Guys Smart ");
//console.log(res);

//Two wAYS TO PRINT FILE DATA

// ->  BY USING AUTOMATIC ENCODING
// let data = fs.readFileSync("f1.txt");
// console.log(data+"");

// -> BY USING UTF-8 ENCODING
let data = fs.readFileSync("f1.txt", "utf-8");
console.log(data);

