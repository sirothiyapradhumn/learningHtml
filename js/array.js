
// array -> is collection of elements

let cars = ['BMW', "AUDI", 'MG', 1, 3 ,4 , true];
console.log(cars);

// Accessing the elemets from array
console.log(cars[0]);
console.log(cars[3]);

//replacing array elements

cars[4] = "Mahindra";
console.log(cars);

//adding elements in array

cars[7] = "TATA";
console.log(cars);
// o/p  [ 'BMW', 'AUDI', 'MG', 1, 'Mahindra', 4, true, 'TATA' ]

// cars[9] = 'honda';
// console.log(cars);     dont do this becausee there is no 8th element in array


// methods in array
// -> pop method -> last element pop

cars.pop();
console.log(cars);   // o/p [ 'BMW', 'AUDI', 'MG', 1, 'Mahindra', 4, true ]

// push -> push elemnet in last element of array

cars.push("123");
console.log(cars); // o/p [ 'BMW', 'AUDI', 'MG', 1, 'Mahindra', 4, true, '123' ]

// unshift method -> it add element at the staring of array

cars.unshift('Tempo'); 
console.log(cars); //o/p   [ 'Tempo', 'BMW', 'AUDI', 'MG', 1, 'Mahindra', 4, true, '123' ]

// shift -> it remove elemnt from 0th element

cars.shift();
cars.shift();
console.log(cars); // o/p [ 'AUDI', 'MG', 1, 'Mahindra', 4, true, '123' ]


/* 2D ARRAY */
let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("2D array");
console.log(array2d);

console.table(array2d); // print 2d array in form of table

console.log(array2d[1][2]);
console.log(array2d[1].length);
console.log(array2d.length);