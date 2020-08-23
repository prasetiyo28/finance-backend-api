const { body } = require('express-validator');
exports.validate = method => {
  switch (method) {
    case 'post_transaction': {
      return [
        body('finance_name', 'finance cannot empty')
          .not()
          .isEmpty(),
        body('id_account', 'id account cannot empty')
          .not()
          .isEmpty(),
        body('amount', 'amount cannot empty')
          .not()
          .isEmpty()
      ];
    };
    case 'update_transaction': {
      return [
        body('id', 'id transaction cannot empty')
          .not()
          .isEmpty(),
        body('finance_name', 'finance cannot empty')
          .not()
          .isEmpty(),
        body('id_account', 'id account cannot empty')
          .not()
          .isEmpty(),
        body('amount', 'amount cannot empty')
          .not()
          .isEmpty()
      ];
    };
    default:
      break;
  }
};
