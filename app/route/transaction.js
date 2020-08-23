const router = require('express').Router();

const TransactionController = require('../controllers/TransactionController');
const AccessMidleware = require('../helpers/accessKey');
const Validator = require('../helpers/validation');

router.get('/user-transaction', AccessMidleware.checkAccess, TransactionController.getUserTransaction);
router.get('/user-transaction/:id', AccessMidleware.checkAccess, TransactionController.getUserTransactionById);
router.get('/monthly-report', AccessMidleware.checkAccess, TransactionController.getMonthlyReport);
router.get('/daily-report', AccessMidleware.checkAccess, TransactionController.getDailyReport);
router.post('/create-transaction', [AccessMidleware.checkAccess, Validator.validate('post_transaction')], TransactionController.createTransaction);
router.put('/update-transaction', [AccessMidleware.checkAccess, Validator.validate('put_transaction')], TransactionController.updateTransaction);
router.patch('/:purpose/:id', AccessMidleware.checkAccess, TransactionController.deleteRestoreTransaction);
router.delete('/:purpose/:id', AccessMidleware.checkAccess, TransactionController.deleteRestoreTransaction);

module.exports = router;
