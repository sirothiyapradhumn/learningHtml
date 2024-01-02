// ----------------------------------------------------------------------
// promise constructor
let passBtn = document.querySelector('.pass-btn');
let failBtn = document.querySelector('.fail-btn');

const sharadPromise = new Promise((resolve, reject) => {
  passBtn.addEventListener('click', ()=>{
    resolve('PS5 Gift dai do hak sai maag raha hai');
  })
  failBtn.addEventListener('click', ()=>{
    reject('No! PS5, Mobile cheen lo');
  })
});

sharadPromise.then((data)=>{
  console.log(data);
}).catch((err)=> {
  console.log(err)
}).finally(()=>{
  console.log('Study Hard')
})

// ----------------------------------------------------------------------
//fetch api
fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((data) => console.log(data));

// ----------------------------------------------------------------------
// fetch nested like callback hell
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
  // console.log(data);
  let userId = data.users[3].id;
  return fetch(`https://dummyjson.com/posts/user/${userId}`)
})
.then((res) => res.json())
.then((data) => {
  // console.log(data.posts[0]);
  let postUserId = data.posts[0].userId;
  return fetch(`https://dummyjson.com/comments/post/${postUserId}`)
})
.then(res => res.json())
.then((data)=> {
  // console.log(data.comments);
  let userComments = data.comments;
  let comments = userComments.map(
    (obj) => ({postId: obj.postId, comment: obj.body})
    );
  console.log(comments);
})

// ----------------------------------------------------------------------
// async await 
let asyncGet = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

asyncGet().then((data) => {
  console.log(data.products);
})

// ----------------------------------------------------------------------
// async await with try catch
let asyncGetProduct = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

asyncGetProduct().then((data) => {
  console.log(data.products);
})