const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
const AccessMidleware = require('../helpers/accessKey');
const Validator = require('../helpers/validation');

router.post('/login', AuthController.login);
router.post('/register', Validator.validate('post_users'), AuthController.register);
router.get('/cek', AccessMidleware.checkAccess, AuthController.cek);
router.get('/logout', AccessMidleware.checkAccess, AuthController.logout);

module.exports = router;
