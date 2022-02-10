// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Route files
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Setup Listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
