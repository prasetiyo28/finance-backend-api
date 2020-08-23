const Account = require('../services/finance_account');
const moment = require('moment');

exports.getUserAccount = async (req, res, next) => {
  try {
    const user = req.user;
    const filterName = req.query.filter_name;
    const search = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.per_page) || 10;
    const params = {
      id_user: user.user_id,
      filter_name: filterName,
      search: search,
      page: page,
      perPage: perPage
    };
    const result = await Account.getUserAccounts(params);
    const finalResult = {
      account: result.rows,
      total_page: Math.ceil(result.count / perPage)
    };
    return MSG.sendResponse(res, 'GET_USER_ACCOUNT_SUCCESS', finalResult, true);
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

exports.createAccount = async (req, res, next) => {
  try {
    const params = req.body;
    const user = req.user;
    params.id_user = user.user_id;
    const result = await Account.createAccount(params);
    return MSG.sendResponse(res, 'CREATE_ACCOUNT_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'CREATE_ACCOUNT_FAILED');
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    const params = req.body;
    params.updatedAt = moment().format('YYYY-DD-MM, h:mm:ss');
    const result = await Account.updateAccount(params);
    return MSG.sendResponse(res, 'UPDATE_ACCOUNT_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'UPDATE_ACCOUNT_FAILED');
  }
};

exports.deleteRestoreAccount = async (req, res, next) => {
  try {
    const paramsQuery = req.params;
    const params = {
      id: paramsQuery.id,
      updatedAt: moment().format('YYYY-DD-MM, h:mm:ss')
    };

    if (paramsQuery.purpose === 'delete') {
      params.deleted = true;
    } else {
      params.deleted = false;
    }
    const result = await Account.updateAccount(params);
    return MSG.sendResponse(res, 'DELETE_RESTORE_ACCOUNT_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'DELETE_RESTORE_ACCOUNT_FAILED');
  }
};
