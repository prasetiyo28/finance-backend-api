const router = require('express').Router();

const TransactionController = require('../controllers/TransactionController');
const AccessMidleware = require('../helpers/accessKey');

router.get('/user-transaction', AccessMidleware.checkAccess, TransactionController.getUserTransaction);
router.get('/user-transaction/:id', AccessMidleware.checkAccess, TransactionController.getUserTransactionById);
router.get('/monthly-report', AccessMidleware.checkAccess, TransactionController.getMonthlyReport);
router.get('/daily-report', AccessMidleware.checkAccess, TransactionController.getDailyReport);
router.post('/create-transaction', AccessMidleware.checkAccess, TransactionController.createTransaction);
router.put('/update-transaction', AccessMidleware.checkAccess, TransactionController.updateTransaction);
router.patch('/:purpose/:id', AccessMidleware.checkAccess, TransactionController.deleteRestoreTransaction);
router.delete('/:purpose/:id', AccessMidleware.checkAccess, TransactionController.deleteRestoreTransaction);

module.exports = router;
