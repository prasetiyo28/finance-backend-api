const Transaction = require('../services/finance_transaction');

exports.getUserTransaction = async (req,res,next) => {
    try {
        const result = await Transaction.getUserTransaction();
        return MSG.sendResponse(res, 'GET_USER_ACCOUNT_SUCCESS',result , true);
    } catch (error) {
        console.log(error)
        return MSG.sendResponse(res, 'GET_USER_ACCOUNT_FAILED');
    }
}