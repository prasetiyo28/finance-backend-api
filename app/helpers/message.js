// const async = require('async');

const misc = require('../helpers/misc');

const message = {
  sendResponse: (res, msgCode, data, msgSuccess) => {
    return misc.responses(
      res,
      {
        msg_success: msgSuccess,
        msg_code: msgCode,
        msg_client: msgCode
      },
      data
    );
  }
};

module.exports = message;
