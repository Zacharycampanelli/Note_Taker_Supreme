// Dependencies
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// npm package to generate random note id
const uniqid = require('uniqid');

// GET request that returns all notes
router.get('/notes', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  res.json(data);
});

// POST request to add a new note
router.post('/notes', (req, res) => {
  let addedNote = req.body;
  addedNote.id = uniqid();

  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  data.push(addedNote);

  fs.writeFileSync('./db/db.json', JSON.stringify(data));
  res.json(addedNote);
});

// DELETE request to remove a note by it's id number.
router.delete('/notes/:id', (req, res) => {
  let noteID = req.params.id;

  let currentNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const filteredData = currentNotes.filter((note) => note.id !== noteID);

  fs.writeFileSync('./db/db.json', JSON.stringify(filteredData));
  console.log(filteredData);
  res.json(filteredData);
});

module.exports = router;
