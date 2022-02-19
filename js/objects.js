let obj = {}; // this is empty object 
console.log(obj); // {}

let person = {
    Name: "Sahil",
    Company: "Accenture",
    Age : 24,
    Skill : ["java", "node.js", "React.js", "Html", "CSS", "Big data"], // Put array in the Object as key : value
    Gender : "Male",
    sayHi : function () { // put function in object as key : value 
        console.log(`Hello, I work for ${person.Company} and My skills are ${person.Skill} Thank You.`);
    },
    isDevloper : true, // put boolean int obj as  key : value  
    Address : { // nested object    -> object kai ander object 
        State : "Madhya Pradesh",
        City : "Gwalior",
        Country : "India",
        Pincode : 474001
    }
}

console.log(`Hey ${person.Company} Thank You for Signing Up.`);
console.log(person.Address);
console.log(person.Age);
console.log(person.Skill);
console.log(person.Skill[2]);
person.sayHi(); // Method accesing from object 