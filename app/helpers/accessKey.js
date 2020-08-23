const jwt = require('jsonwebtoken');
const redisCache = require('../lib/RedisCache');

exports.checkAccess = async (req, res, next) => {
  try {
    const key = req.header('access_token') || req.params.access_token || '';
    const redisKey = await redisCache.getInAsync(key);
    if (!redisKey) return MSG.sendResponse(res, 'ACCESS NOT FOUND');
    var decoded = await jwt.verify(redisKey.token, process.env.JWT_SECRET);
    if (!decoded) {
      return MSG.sendResponse(res, 'ACCESS NOT FOUND');
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'ACCESS NOT FOUND');
  }
};
