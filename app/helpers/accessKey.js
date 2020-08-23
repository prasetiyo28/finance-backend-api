const jwt = require('jsonwebtoken');

exports.checkAccess = async (req, res, next) => {
  try {
    const key = req.header('access_token') || req.params.access_token || '';
    var decoded = await jwt.verify(key, process.env.JWT_SECRET);
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
