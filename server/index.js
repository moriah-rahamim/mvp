require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const VERBOSE = (process.env.VERBOSE === 'true');

const app = express();
if (VERBOSE) app.use(morgan('dev'));

app.get('/', (request, response) => response.send('hello world'));

app.listen(PORT, HOSTNAME, () => console.log(`listing at ${HOSTNAME}:${PORT}`));
