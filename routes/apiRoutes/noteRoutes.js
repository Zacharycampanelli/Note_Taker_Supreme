const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {


  //add note to json file and note array 
  let addedNote = req.body;
  addedNote.id = notes.length.toString();
  notes.push(newNote);
  return res.json(addedNote);
});

router.delete('/notes/:id', (req, res) => {
  deleteNote(req.body.id);

})

module.exports = router;