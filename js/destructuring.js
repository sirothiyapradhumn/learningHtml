//array destructuring

[a, b] = ["fjp", 5];

console.log(a); // fjp
console.log(b); // 5

[n1, ,n3] = [1,2,3];
console.log(n1); // 1
console.log(n3); // 3

//object destructuring

let obj ={
    name: "sohana",
    age:23
}

let {age}  = obj;

console.log(age);