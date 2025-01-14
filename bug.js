const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation without error handling
  someAsyncOperation().then(result => {
    res.send(result);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Simulated error')); // This error is not handled
      }
    }, 1000);
  });
}