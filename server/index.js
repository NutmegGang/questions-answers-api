const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes.js');

const app = express();
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
})