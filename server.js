const express = require('express');
const app = express();

app.use(express.json());

app.post('/create', (req, res) => {
  res.send('Data created successfully!');
});

app.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
  });
  
const myPostHandler = (req, res) => {
  res.send('Data created successfully!');
};
app.post('/create', myPostHandler); // This also works fine.

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
