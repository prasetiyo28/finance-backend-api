const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
const AccessMidleware = require('../helpers/accessKey');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/cek', AccessMidleware.checkAccess, AuthController.cek);

module.exports = router;
