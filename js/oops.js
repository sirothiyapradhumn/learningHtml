/*
class Penguin{
    constructor(){
        this.habitat = "Antartica";
    }

    printPlaceOfOrigin(){
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);
//Penguin {habitat: 'Antartica'}

myPenguin.printPlaceOfOrigin();
//Antartica

*/

//inheritence

/*
class LivingOrganism{
    constructor(){
        this.breath = true;
    }

    isBreath (){
        console.log(this.breath);
    }
}

// error :-  Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Bird extends LivingOrganism{
    constructor(){
        super();
        this.eat = "Fish";
    }

    printEating(){
        console.log(this.eat);
    }
}

class Penguin extends Bird{
    constructor(){
        super();
        this.habitat = "Antartica";
    }

    printPlaceOfOrigin(){
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);
// Penguin {breath: true, eat: 'Fish', habitat: 'Antartica'}
// breath: true
// eat: 'Fish'
// habitat: "Antartica"
// [[Prototype]]: Bird

myPenguin.isBreath();
//true

myPenguin.printEating();
//Fish

myPenguin.printPlaceOfOrigin();
//Antartica


*/


//new way to write class
class Bird {

    eat = true;

    printEating = ()=> console.log(this.eat);
}

class Penguin extends Bird{
   
    habitat = "Antartica";

    printPlaceOfOrigin = ()=>{
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);

myPenguin.printEating();
//Fish

myPenguin.printPlaceOfOrigin();
//Antartica
