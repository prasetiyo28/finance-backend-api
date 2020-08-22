const misc = {
  responses: (res, message, data) => {
    const status = message.msg_status || 200;

    const result = {
      success: !!message.msg_success,
      msg_code: message.msg_code,
      msg_client: message.msg_client
    };

    if (data) result.data = data;

    return res.status(status).send(result);
  }
};

module.exports = misc;
