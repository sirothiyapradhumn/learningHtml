// sync callback

function greet(name, age, callbackAge, callbackVote){
  console.log('candidate name: HI',name);
  console.log('candidate age', age);
  const ageVerify = callbackAge(age);
  callbackVote(ageVerify);
}

const verifyAge = (age) => {
  if(age > 18){
    console.log('you are eligible for vote');
    return true;
  } 
  console.log('you are not eligible for vote');
  return false;
}

const doVote = (vAge) => {
  if(vAge){
    console.log('Proceed to Vote')
  } else {
    console.log('go Back to home')
  }
}

greet('sahil', 25, verifyAge, doVote);
console.log('--------------------------------------')
greet('Sharad', 14, verifyAge, doVote);
console.log('--------------------------------------')



// async callback

// function asyncgreet(name, age, callbackAge, callbackVote){
//   console.log('candidate name: HI',name);
//   console.log('candidate age', age);
//   const ageVerify = callbackAge(age);
//   callbackVote(ageVerify);
// }

// const asyncverifyAge = (age) => {
//   setTimeout(()=>{
//     if(age > 18){
//       console.log('you are eligible for vote');
//       return true;
//     } 
//     console.log('you are not eligible for vote');
//     return false;
//   }, 2000);
// }

// const asyncdoVote = (vAge) => {
//   if(vAge){
//     console.log('Proceed to Vote')
//   } else {
//     console.log('go Back to home')
//   }
// }

// asyncgreet('aman', 23, asyncverifyAge, asyncdoVote);

console.log('--------------------------------------')

function asyncgreet(name, age, callbackAge, callbackVote){
  console.log('candidate name: HI',name);
  console.log('candidate age', age);
  callbackAge(age, callbackVote);
}

const asyncverifyAge = (age, cb) => {
  setTimeout(()=>{
    if(age > 18){
      console.log('you are eligible for vote');
      cb(true);
    } else {
      console.log('you are not eligible for vote');
      cb(false);
    }
    
  }, 2000);
}

const asyncdoVote = (vAge) => {
  if(vAge){
    console.log('Proceed to Vote')
  } else {
    console.log('go Back to home')
  }
}

// asyncgreet('sharad', 23, asyncverifyAge, asyncdoVote);


// function workToDoWocallback(work, callback){
//   callback(work);
// };

// workToDoWocallback('brush my teeth', (work)=>{
//   setTimeout(()=>console.log(work), 1000);
// });
// workToDoWocallback('goto gym', (work)=>{
//   setTimeout(()=>console.log(work), 4000);
// });
// workToDoWocallback('breakfast', (work)=>{
//   setTimeout(()=>console.log(work), 2000);
// });
// workToDoWocallback('coding', (work)=>{
//   setTimeout(()=>console.log(work), 3000);
// });


// callback hell
function workToDo(work, callback){
  callback(work);
}

workToDo('brush', (w)=>{
  setTimeout(()=>{
    console.log(w);
    workToDo('gym', (w)=>{
      setTimeout(()=>{
        console.log(w);
        workToDo('breakfast', (w)=>{
          setTimeout(()=>{
            console.log(w);
            workToDo('coding', (w)=>{
              setTimeout(()=>{
                console.log(w);
              },3000);
            })
          }, 2000)
        })
      }, 4000);
    })
  }, 1000);
})



// another ex of callback hell 
function sum(a, b) {
  // console.log(a+b);
  return a + b;
}

let async = (a, b, cb) => {
  setTimeout(() => {
    return cb(sum(a, b));
  }, 3000);
};

async(5, 5, function (res) {
  async(5, res, function (res) {
    async(5, res, function (res) {
      async(10, res, function (res) {
        console.log("final res", res);
        return res;
      });
    });
  });
});


// same as above -> using arrow fn

async(5, 5, (res) => {
  async(5, res, (res) => {
    async(5, res, (res) => {
      async(10, res, (res) => {
        console.log(res);
        return res;
      });
    });
  });
});
