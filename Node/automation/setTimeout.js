
    // function yolo() {
    //     var a = 10;
    //     function cb(err, res) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             console.log("hello how are you ?");
                
    //         }
    //     }
    //     // function to be executed(callback fun) , time(ms) after which cb to be executed
    //     // 1 second =1000 milli second
    //     setTimeout(cb, 5000);
    //     console.log(a);
    
    // }
    
    // yolo();
    // let b = 100;
    // console.log(b);
    

    // by using let, print 1 to 10 interval of 2 se
    // for (let i = 1; i <= 10; i++){
    //     // hint: closures and scope -> wrapping
    //     setTimeout(function () {
    //         console.log(i);
    //     }, 2000*i);
    // }
    
    
    
    // for (var i = 1; i <= 10; i++){
    //     // hint: closures and scope -> wrapping
    //     function outer(a){
    //         setTimeout(function(){
    //             console.log(a);
    //         }, 2000*a);
    //     }

    //     outer(i);
    // }
    
    
    //  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

    //question
    // console.log("before");
    // setTimeout(function(){
    //     console.log("time out");
    // }, 5000);
    // console.log("after");

    console.log("before");
    setTimeout(function(){
        console.log("time out");
    },5000);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response){ return response.json(); })
    .then(function(json){ console.log(json); });
    console.log("after");