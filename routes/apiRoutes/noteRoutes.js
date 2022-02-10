const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const uniqid = require('uniqid');


router.get('/notes', (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  console.log(data);
  res.json(data);
});



router.post('/notes', (req, res) => {

  let addedNote = req.body;
  addedNote.id = uniqid();
  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  
  data.push(addedNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(data));
  res.json(addedNote);
});

router.delete('/notes/:id', (req, res) => {
  let noteID = req.params.id;

  let currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const filteredData = currentNotes.filter(note => note.id !== noteID);
  fs.writeFileSync('./db/db.json', JSON.stringify(filteredData));
  console.log(filteredData);

  res.json(filteredData)
});

module.exports = router;
