const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Welcom!');
});

app.listen(3000, () => {
  console.log('Server running on port: ', 3000);
});