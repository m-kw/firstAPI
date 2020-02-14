const express = require('express');
const cors = require('cors');

const app = express();

const db = [
  {id: 1, author: 'John Doe', text: 'This company is worth every coin!'},
  {id: 2, author: 'Amanda Doe', text: 'The really know how to make you happy'},
];

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
