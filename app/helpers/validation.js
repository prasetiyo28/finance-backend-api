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
    case 'put_transaction': {
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
    case 'post_account': {
        return [
          body('name', 'finance cannot empty')
            .not()
            .isEmpty(),
          body('type', 'id account cannot empty')
            .not()
            .isEmpty(),
        ];
      };
      case 'put_account': {
        return [
            body('id', 'id cannot empty')
            .not()
            .isEmpty(),
            body('name', 'name cannot empty')
            .not()
            .isEmpty(),
          body('type', 'type cannot empty')
            .not()
            .isEmpty(),
        ];
      };
      case 'post_users': {
        return [
            body('name', 'name cannot empty')
            .not()
            .isEmpty(),
            body('username', 'username cannot empty')
            .not()
            .isEmpty(),
          body('email', 'email cannot empty')
            .not()
            .isEmpty(),
            body('password', 'password cannot empty')
            .not()
            .isEmpty(),
        ];
      };
    default:
      break;
  }
};
