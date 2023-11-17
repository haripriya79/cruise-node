const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/api', (req, res) => {
    const jsonData = require('./public/data.json');
    res.json(jsonData);
  });

  
  router.get('/', (req, res) => {
    const jsonData = require('./public/data.json');
    res.json(jsonData);
  });
  
  // Serve static files from the 'public' directory
  app.use('/api', router);
  
  
  module.exports.handler = serverless(app);
  