const express = require('express');
const cors = require('cors');
const uuidv4 = require('uuid/v4');
const db = require('./db');
const testimonialsRoutes = require('./routes/testimonials.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use('/', testimonialsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
