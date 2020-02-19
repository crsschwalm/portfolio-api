const express = require('express');
const cors = require('cors');
const apiRouter = require('./api');
const errorHandler = require('./helpers/errorHandler');

const server = express()
  .use(cors())
  .use(express.urlencoded({ extended: true, strict: false }))
  .use(express.json())
  .get('/', (req, res) => {
    res.json({ message: 'Express API Powered by AWS Lambda!' });
  })
  .use('/v1/api', apiRouter)
  .use(errorHandler.notFound)
  .use(errorHandler.internalServerError);

module.exports = server;
