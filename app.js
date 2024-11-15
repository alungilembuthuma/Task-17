// server.js

const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Correct way to use post with a valid callback
app.post('/create', (req, res) => {
  res.send('Data created successfully!');
});

// Ensure the handler function is correctly passed
const myPostHandler = (req, res) => {
  res.send('Data created successfully!');
};
app.post('/create', myPostHandler); // This also works fine.

app.listen(3000, () => {
  console.log('Server is running on port 5000');
});
