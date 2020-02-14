const express = require('express');
const cors = require('cors');
const uuidv4 = require('uuid/v4');
const db = require('./db');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//app.use(cors());

app.get('/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.get('/testimonials/random', (req, res) => {
  res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

app.get('/testimonials/:id', (req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

app.post('/testimonials', (req, res) => {
  const { author, text } = req.body;
  const id = uuidv4();
  res.json({ message: 'ok' });
});

app.put('/testimonials/:id', (req, res) => {
  const { author, text } = req.body;
  res.json({ message: 'ok' });
});

app.delete('/testimonials/:id', (req, res) => {
  res.json({ message: 'ok' });
});

app.get('/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
