const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const AccessMidleware = require('../helpers/accessKey');
const Validator = require('../helpers/validation');

router.get('/user-account', AccessMidleware.checkAccess, AccountController.getUserAccount);
router.get('/user-account/:id', AccessMidleware.checkAccess, AccountController.getAccountById);
router.post('/create-account', [AccessMidleware.checkAccess, Validator.validate('post_account')], AccountController.createAccount);
router.put('/update-account', [AccessMidleware.checkAccess, Validator.validate('put_account')], AccountController.updateAccount);
router.patch('/:purpose/:id', AccessMidleware.checkAccess, AccountController.deleteRestoreAccount);
router.delete('/:purpose/:id', AccessMidleware.checkAccess, AccountController.deleteRestoreAccount);

module.exports = router;
