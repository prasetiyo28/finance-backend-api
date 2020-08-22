const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const AccessMidleware = require('../helpers/accessKey');

router.get('/user-account',AccessMidleware.checkAccess, AccountController.getUserAccount);
router.get('/user-account/:id',AccessMidleware.checkAccess, AccountController.getAccountById);

module.exports = router;
