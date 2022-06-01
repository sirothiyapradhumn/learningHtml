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


// let user = {
//     name: "John",
//     age: 30
//   };

// let clone = {};

// Object.assign(clone, user, {lastName :"sharma"}, {hobby : "football"}); // clonning and merging

// console.log(clone);


//deep clone 

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = {};
//this is not deep cloning , because refference to size identifier is same in both clone and user obj 
Object.assign(clone, user);
console.log(clone);
clone.name = "ABHISHEK";
console.log(clone);
clone.sizes.height = 123;
console.log(clone);
console.log(user);

//flatten an Object 

let flattenedObj={ 
  "name": "Jhon",
  "sizes.height" : 182,
  "sizes.width":50
}