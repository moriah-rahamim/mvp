require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const logger = require('../logger');
const bodyParser = require('body-parser');
const db = require('../db/controller');

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const VERBOSE = (process.env.VERBOSE === 'true');

const app = express();
if (VERBOSE) app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/:user/attempts', ({ body, params: { user } }, response) => {
  const insertedItem = db.insert(user, body);
  logger.log('inserted pitch attempt for user', user, ':', insertedItem);
  response.status(201).send(JSON.stringify(insertedItem));
});

app.listen(PORT, HOSTNAME, () => logger.log(`listing at ${HOSTNAME}:${PORT}`));
