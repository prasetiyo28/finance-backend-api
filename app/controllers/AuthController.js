// const redisCache = require('../lib/RedisCache');
// const md5 = require('md5');
// const bcrypt = require('bcrypt');
const Users = require('../services/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// exports.setRedisDummy = (req, res, next) => {
//   const currentTime = new Date().toISOString();
//   const random = Math.random().toString();
//   const accessKey = md5(currentTime + random);
//   const user = { access_key: accessKey, id_userdetail: 312, username: 'gramedia-999' };
//   redisCache.set(accessKey, user);
//   redisCache.expire(accessKey, 1800);

//   res.status(200).json({ success: true, msg_code: 'GET_DUMMY_TOKEN_SUCCESS', msg_client: 'Get Dummy Token Success', data: { access_key: accessKey } });
// };

exports.login = async (req, res, next) => {
  try {
    const params = req.body;
    const user = await Users.getUserByEmailUsername(params);
    if (!user) return MSG.sendResponse(res, 'USERNAME_EMAIL_NOT_FOUND');
    
    const checkPassword = await bcrypt.compare(params.password, user.password);
    if (checkPassword === false) return MSG.sendResponse(res, 'PASSWORD_NOT_MATCH');
    const result = {user_id : user.id, username:user.username, email:user.email};
    const token = jwt.sign(result,process.env.JWT_SECRET,{ expiresIn: '24h'});
    result.access_token = token;

    return MSG.sendResponse(res, 'LOGIN_SUCCESS',result , true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'LOGIN_FAILED');
  }
};

exports.register = async (req, res, next) => {
    try {
      const params = req.body;
      params.password = bcrypt.hashSync(params.password, 10);
      const user = await Users.createUser(params);
      params.password = bcrypt
      return MSG.sendResponse(res, 'REGISTER_SUCCESS',user);
    } catch (error) {
      console.log(error);
      return MSG.sendResponse(res, 'REGISTER_FAILED');
    }
};



exports.cek = async (req, res, next) => {
    try {
      return MSG.sendResponse(res, 'CEK_SUCCESS',req.user);
    } catch (error) {
      console.log(error);
      return MSG.sendResponse(res, 'CEK_FAILED');
    }
  };