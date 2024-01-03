function sum (a, b) {
  return a+b;
}

let asyncFn = async (a,b, isRes, timeOut) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(isRes) {
        let data = sum(a, b);
        resolve(data);
      } else {
        reject('Error in Sum');
      }
    }, timeOut);
  })
}


// consuming promise using then & catch
asyncFn(2,3, true, 3000)
.then((data) => console.log(data))
.catch((err)=> console.log(err))

// consuming promise using async & await
let getRes = async () => {
  try {
    let res = await asyncFn(5, 5, false, 5000);
    console.log(res);
  } catch (err) {
    console.log(err)
  }
}

getRes();