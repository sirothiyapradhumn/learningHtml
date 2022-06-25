var arr = [];
var obj = {};

function abc(){
    console.log("you only live once");
}

console.log(arr.__proto__);
console.log(Array.prototype);

//o/p same for 8,9 line [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);

// o/p Object kai function {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(abc.__proto__);

console.log(abc.__proto__.__proto__);
// o/p Object kai function {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


console.log(obj.__proto__.__proto__);
// null -- Bhagwan sai bada koi nhi hai like this


let user = {
    name:"Sahil",
    sayHi: function(){
        console.log(this.name);
    }
}

let admin = {
    role: "admin",
    age: 30,
}

// admin.name  // we cant acess this property 

admin.__proto__ = user;

//now we can acess 
admin.name  // sahil
admin.sayHi()  //sahil

admin.name = "Pradhumn";
admin.sayHi();  // pradhumn;