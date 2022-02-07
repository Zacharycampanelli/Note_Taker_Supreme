const fs = require('fs');
const path = require('path');

function createNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes: noteArray}, null, 2)
  );

  return note;
}

module.exports = {
    createNote
}