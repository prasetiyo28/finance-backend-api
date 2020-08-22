const AuthRouter = require('./auth');
const AccountRouter = require('./account');
const TransactionRouter = require('./transaction');
// const notFound = require('./404').index;

module.exports = function (app) {
  app.use('/auth', AuthRouter);
  app.use('/account', AccountRouter);
  app.use('/transaction', TransactionRouter);
  // app.use(notFound);
};
