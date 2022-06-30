let user = {
    firstName: "Kapil",
    lastName : "DEv",
    // welcome : function(){
    //     console.log(`Welcome ${this.firstName}  ${this.lastName}`);
    // }

};

//user.welcome();

let welcome =function(email, number, location){
    console.log(`Welcome ${this.firstName}  ${this.lastName} thank you for signing up! YOur Email is ${email},
    your number ${number} ,
    your location ${location}`);
};

let user2 = {
    firstName: "Ravi",
    lastName: "Shastri"
};

//call method

//syntax -> function_name.call(obj_to _which_this_will_point);
//we want to print welcome message for Ravi Shastri

//user.welcome.call(user2);
        //o/p-> Welcome Ravi  Shastri

welcome.call(user2, "abc@gmail.com", 1234567890, "INDIA");
// o/p -> Welcome Ravi  Shastri thank you for signing up! YOur Email is abc@gmail.com,
//     your number 1234567890 ,
//     your location INDIA


// apply method  -> similar to call 
welcome.apply(user, ["Kapil@gmail.com", 123457890, "INDIA"]);

//bind method
var bindedFN = welcome.bind(user, "abc@gmail.com", 1234567890, "INDIA");
//console.log(bindedFN);
bindedFN();


let againgBindedFN = bindedFN.bind(user2);
againgBindedFN(); // kapil dev wala user  ayega bcoz ek bar hi bind hota hai.


//new binding

function Name(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var newObj = new Name("Sunil", "Gavaskar");

//js create a new obj int background , and passes its refference to the function


//question

function fun(){
    console.log(this.name || "Name is not defined");
}

var obj = {
    name : "Yashpal Sharma"
}

var bindedFN  = fun.bind(obj);
bindedFN();
//Yashpal Sharma
var againgBindedFN1 = new bindedFN();
againgBindedFN1();
//Name is not defined
