require('dotenv').config();
const express = require('express');
// const helmet = require('helmet');
const bodyParser = require('body-parser');
const async = require('async');
const path = require('path');
const Cors = require('cors');
const xssFilter = require('x-xss-protection');

const addRequestId = require('express-request-id')();

const corsOption = require('./app/config/cors');
const sequelize = require('./app/models').sequelize;


const parallelMiddleware = middlewares => (req, res, next) =>
  async.each(middlewares, (mw, cb) => mw(req, res, cb), next);
    const app = express();
app.options('*', Cors(corsOption));
app.use(Cors(corsOption));

app.use(addRequestId);
global._ = require('lodash');
global.MISC = require(path.join(__dirname, '/app/helpers/misc'));
global.MSG = require(path.join(__dirname, '/app/helpers/message'));


// app.use(helmet());
app.use(xssFilter());
app.use(
  parallelMiddleware([
    bodyParser.json({ limit: '2mb' }),
    bodyParser.urlencoded({
      extended: true,
      limit: '2mb',
      parameterLimit: 1000
    }),
    // morgan('dev')
  ])
);

app.use((req, res, next) => {
  sequelize
      .authenticate()
      .then(() => {
          // console.log('Connection has been established successfully.');
          // LOG.info('Connection has been established successfully.');
          next();
      })
      .catch(() => {
          return MISC.responses(res, {
              msg_status: 400,
              msg_success: false,
              msg_code: 'CONNECT_TO_DB_FAILED',
              msg_client: 'Gagal Menyambung ke Database'
          });
      });
});

require('./app/route')(app);

app.use(function (err, req, res, next) {
  console.log(err);
  return MSG.sendResponse(res, 'INTERNAL_ERROR');
});


app.disable('x-powered-by');

module.exports = app;
