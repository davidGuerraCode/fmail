const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/emails', (req, res) => {
  const emails = [
    {
      id: '1',
      subject: 'My subject',
      isImportant: true,
      body:
        'This is my email, and it is super long so that we are forced to cut it short',
      timestamp: Date.now() - 1001
    },
    {
      id: '2',
      subject: 'My subject 2',
      isImportant: true,
      body:
        'This is my email, and it is super long so that we are forced to cut it short',
      timestamp: Date.now() - 1001
    },
    {
      id: '3',
      subject: 'My subject 3',
      body:
        'This is my email, and it is super long so that we are forced to cut it short',
      timestamp: Date.now() - 1003
    }
  ];

  res.json(emails);
});

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
