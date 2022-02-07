const router = require('express').Router();
const {createNote} = require('../../lib/notes')
const { notes } = require('../../data/db.json');

router.get('/api/notes', (req, res) => {
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
  res.json(req.body);
});

module.exports = router;