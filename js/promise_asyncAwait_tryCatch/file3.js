function sum (a, b) {
  return a+b;
}

let asyncFn = (a,b, isRes, timeOut) => {
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
let p1 = asyncFn(2,3, true, 1000);
let p2 = asyncFn(5,5, false, 2000);
let p3 = asyncFn(4,5, true, 3000);

// promise.all
Promise.all([p1, p2, p3])
.then((data) => console.log(data))
.catch((err) => console.log(err))

// promise.allSettled
Promise.allSettled([p1, p2, p3])
.then((data) => console.log(data))
.catch((err) => console.log(err))

// promise.race
Promise.race([p1, p2, p3])
.then((data) => console.log(data))
.catch((err) => console.log(err))

// promise.any
Promise.any([p1, p2, p3])
.then((data) => console.log(data))
.catch((err) => console.log(err))


// promise consuming using async & await

let promiseAll = async () => {
  try {
    let data = await Promise.all([p1, p2, p3])
    console.log(data);
  } catch (err) {
    console.log(err)
  }
}
promiseAll()

let promiseAllSettled = async () => {
  try {
    let data = await Promise.allSettled([p1, p2, p3])
    console.log(data);
  } catch (err) {
    console.log(err)
  }
}
promiseAllSettled()

let promiseRace = async () => {
  try {
    let data = await Promise.race([p1, p2, p3])
    console.log(data);
  } catch (err) {
    console.log(err)
  }
}
promiseRace()

let promiseAny = async () => {
  try {
    let data = await Promise.any([p1, p2, p3])
    console.log(data);
  } catch (err) {
    console.log(err)
  }
}
promiseAny()