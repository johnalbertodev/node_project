const express = require('express');
const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

