// 1) node wcat.js filePath -> displays the  contents of a file in terminal
// 2) node wcat.js filePath filePath-> displays multiple file contents in the terminal and concatenate all file content

const fs = require("fs");
            // process.argv ->   es sai ham console mai input lai sakte hai 
let inputArr = process.argv.slice(2);
//console.log(inputArr);

let filesArr = [];
//placed files path in filesArr
for(let i = 0; i<inputArr.length; i++){
    filesArr.push(inputArr[i]);
}

//console.log(filesArr);

//check if all files are present 

for(let i = 0; i<filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist) {
        console.log("Files does not exist");
        break;
    }
}

//content read and appending starts
let content = "";
for(let i = 0; i<filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent+"\n";
}
console.log(content);