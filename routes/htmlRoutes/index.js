// Dependencies
const path = require('path');
const router = require('express').Router();

// GET requests for index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});


// GET Requests for notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// All other GET requests return to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
