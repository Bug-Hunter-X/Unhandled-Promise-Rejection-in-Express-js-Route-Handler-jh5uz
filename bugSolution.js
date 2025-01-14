const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); //Proper error handling
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Simulated error'));
      }
    }, 1000);
  });
}