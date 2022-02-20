var ans  = "5" + 1;
            // "5" + " 1" -> 51  as a string

var ans = 1 + "5";
            // "1" + " 5" -> 15  as a string

console.log(ans);

console.log(null * 5);  // o/p-> 0 ,  null is converted to 0 

console.log(null * "5"); // o/p -> 0 , null * string(int) = 0;

console.log(undefined * 5); // NaN

console.log("5" - 1); // o/p -> 4,  because string converted into int

console.log("ten" * 5); // NaN , string * int = NaN
