const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on the next index of the array
  req.body.id = notes.length.toString();

  //add note to json file and note array 
  const note = createNote(req.body, notes);

  res.json(note);
});

module.exports = router;