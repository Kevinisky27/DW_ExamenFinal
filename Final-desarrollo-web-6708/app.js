const authRoutes = require('./routers/authRouters');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 2552; // Number port server
app.use(morgan(':method :url :status :response-time ms')); // Morgan
app.use('/', authRoutes);
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcom to my API!');
});

app.listen(port, () => {
  console.log('Server running on port: ', port);
});