const router = require('express').Router();

const TransactionController = require('../controllers/TransactionController');
// const AccessMidleware = require('../helpers/accessKey');

router.get('/user-transaction', TransactionController.getUserTransaction);

module.exports = router;
