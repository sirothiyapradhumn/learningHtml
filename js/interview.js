//q1
//count array ele in obj by single loop
let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let  obj = {};
for(let i = 0; i<arr.length; i++){
    obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
}

console.log(obj);

//o/p { '1': 4, '2': 2, '3': 1, '4': 2, '5': 1, '6': 1 }


//----------------------------------------------------

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user) {
//     clone[key] = user[key];
//   }
  
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
  
//   console.log(user.name); // still John in the original object

//   console.log(clone.name);

//-------------------------------------------------------------  


let user = {
    name: "John",
    age: 30
  };

let clone = {};

Object.assign(clone, user, {lastName :"sharma"}, {hobby : "football"}); // clonning and merging

console.log(clone);
