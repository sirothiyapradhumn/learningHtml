let fs = require('fs');


// parallel

fs.readFile('f1.txt', (err, data) => {
  console.log('content '+data);
});


fs.readFile('f2.txt', (err, data) => {
  console.log('content '+data);
});

fs.readFile('f3.txt', (err, data) => {
  console.log('content '+data);
});




//series
fs.readFile('f1.txt', (err, data) => {
  console.log('----------------------------------------------')
  console.log('content '+data);
  fs.readFile('f2.txt', (err, data) => {
    console.log('content '+data);
    fs.readFile('f3.txt', (err, data) => {
      console.log('content '+data);
    });
  });
});