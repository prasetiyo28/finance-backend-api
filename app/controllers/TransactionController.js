const Transaction = require('../services/finance_transaction');
const moment = require('moment');
const { validationResult } = require('express-validator');

exports.getUserTransaction = async (req, res, next) => {
  try {
    const user = req.user;
    const filterName = req.query.filter_name;
    const search = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.per_page) || 10;
    const startDate = req.query.start_date || '0000-00-00';
    const endDate = req.query.end_date || '9999-12-31';
    const params = {
      id_user: user.user_id,
      filter_name: filterName,
      filter_date: [startDate, endDate],
      search: search,
      page: page,
      perPage: perPage
    };

    const result = await Transaction.getUserTransaction(params);
    const finalResult = {
      transactions: result.rows,
      total_page: Math.ceil(result.count / perPage)
    };
    return MSG.sendResponse(res, 'GET_USER_TRANSACTION_SUCCESS', finalResult, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_USER_TRANSACTION_FAILED');
  }
};

exports.getUserTransactionById = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    const params = {
      id: req.params.id,
      id_user: user.user_id
    };
    const result = await Transaction.getUserTransactionById(params);
    if (!result) {
      return MSG.sendResponse(res, 'USER_TRANSACTION_NOT_FOUND');
    }
    return MSG.sendResponse(res, 'GET_USER_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_USER_TRANSACTION_FAILED');
  }
};

exports.createTransaction = async (req, res, next) => {
  try {
    const validate = validationResult(req);
    if (!validate.isEmpty()) { return MSG.sendResponse(res, 'CREATE_USER_TRANSACTION_FAILED', validate.array()); }

    const params = req.body;
    const user = req.user;
    params.id_user = user.user_id;
    const result = await Transaction.createUserTransaction(params);
    return MSG.sendResponse(res, 'CREATE_USER_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'CREATE_USER_TRANSACTION_FAILED');
  }
};

exports.updateTransaction = async (req, res, next) => {
  try {
    const validate = validationResult(req);
    if (!validate.isEmpty()) { return MSG.sendResponse(res, 'UPDATE_USER_TRANSACTION_FAILED', validate.array()); }

    const params = req.body;
    params.updatedAt = moment().format('YYYY-DD-MM, h:mm:ss');
    const result = await Transaction.updateTransaction(params);
    return MSG.sendResponse(res, 'UPDATE_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'UPDATE_TRANSACTION_FAILED');
  }
};

exports.deleteRestoreTransaction = async (req, res, next) => {
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
    const result = await Transaction.updateTransaction(params);
    return MSG.sendResponse(res, 'DELETE_RESTORE_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'DELETE_RESTORE_TRANSACTION_FAILED');
  }
};

exports.getMonthlyReport = async (req, res, next) => {
  try {
    const user = req.user;
    const params = {
      id_user: user.user_id
    };
    const result = await Transaction.getReportMonth(params);
    return MSG.sendResponse(res, 'GET_REPORT_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_REPORT_TRANSACTION_FAILED');
  }
};

exports.getDailyReport = async (req, res, next) => {
  try {
    const user = req.user;
    const params = {
      id_user: user.user_id
    };
    const result = await Transaction.getReportDaily(params);
    return MSG.sendResponse(res, 'GET_REPORT_TRANSACTION_SUCCESS', result, true);
  } catch (error) {
    console.log(error);
    return MSG.sendResponse(res, 'GET_REPORT_TRANSACTION_FAILED');
  }
};
