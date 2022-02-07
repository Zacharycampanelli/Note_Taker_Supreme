const { notes } = require('./data/db');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(notes);
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  