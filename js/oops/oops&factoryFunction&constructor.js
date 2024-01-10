// const user = {
//   firstName: 'Sahil',
//   lastName: 'Sirothiya',
//   age: 25,
//   getAgeYear() {
//     return new Date().getFullYear() - user.age;
//   }
// }


// encapsulation & abstraction => factory function
/*
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    }
  };

  return user;
}

const user1 = createUser('Sahil', 'Sirothiya', 25);
const user2 = createUser('Sharad', 'Sirothiya', 15);
*/

// make a getAgeYear common fn
/* 
console.log(this); // here this is assign to window obj

function getAgeYear () {
  console.log(this); // here this is assign to user which is calling this fn
  return new Date().getFullYear() - this.age;
}

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear,
  };

  return user;
}

const user1 = createUser('Sahil', 'Sirothiya', 25);
const user2 = createUser('Sharad', 'Sirothiya', 15);

user1.getAgeYear();
user2.getAgeYear();
*/

// constructor

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

CreateUser.prototype.getAgeYear = function () {
  console.log(this); // here this is assign to user which is calling this fn
  return new Date().getFullYear() - this.age;
}


const user1 = new CreateUser('Sahil', 'Sirothiya', 25);
const user2 = new CreateUser('Sharad', 'Sirothiya', 15);

const user1Age = user1.getAgeYear();
console.log(user1Age)



