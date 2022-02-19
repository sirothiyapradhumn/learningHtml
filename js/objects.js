let obj = {}; // this is empty object 
console.log(obj); // {}

let person = {
    Name: "Sahil",
    Company: "Accenture",
    Age : 24,
    Skill : ["java", "node.js", "React.js", "Html", "CSS", "Big data"], // Put array in the Object as key : value
    Gender : "Male",
    sayHi : function () { // put function in object as key : value 
        console.log(`Hello, I work for ${this.Company} and My skills are ${person.Skill} Thank You.`);
        //  this.Company -> Means this object means current object
    },
    Address : { // nested object    -> object kai ander object 
        State : "Madhya Pradesh",
        City : "Gwalior",
        Country : "India",
        Pincode : 474001
    },
    isDevloper : true // put boolean int obj as  key : value  
    
};

console.log(`Hey ${person.Company} Thank You for Signing Up.`);
console.log(person.Address); 
console.log(person["Age"]); // braket notaion property
console.log(person.Age); // dot notaion property
console.log(person.Skill);
console.log(person.Skill[2]);
person.sayHi(); // Method accesing from object 

// for loop in object

for(let abc in person){
    // key  print karega
    console.log(abc);
    // value print karega  
    // baraket nottation use kar rhe hai value print karne kai liye
    console.log(person[abc]);

    // print key value in single line 
    //console.log(`${abc} : ${person[abc]}`);
}

console.log(person.Skill[2]); // by using dot notaion 
console.log(person["Skill"][1]); // by using braket notaion
console.log(person.Address.City);// object kai ander object ki property ki value
