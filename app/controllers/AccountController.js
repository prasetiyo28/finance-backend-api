const Account = require('../services/finance_account');

exports.getUserAccount = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await Account.getUserAccounts(user);
    return MSG.sendResponse(res, 'GET_USER_ACCOUNT_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_USER_ACCOUNT_FAILED');
  }
};

exports.getAccountById = async (req, res, next) => {
  try {
    const accountId = req.params.id;
    const user = req.user;

    const params = {
      accountId: accountId,
      id_user: user.user_id
    };

    const result = await Account.getAccountById(params);
    return MSG.sendResponse(res, 'GET_ACCOUNT_BY_ID_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_ACCOUNT_BY_ID_FAILED');
  }
};
