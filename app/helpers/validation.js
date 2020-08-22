const { body, param, header } = require('express-validator');
exports.validate = method => {
  switch (method) {
    case 'post_package': {
      return [
        body('koli_length', 'Koli Length cannot empty')
          .not()
          .isEmpty(),
        body('awb_url', 'Awb url cannot empty')
          .not()
          .isEmpty(),
        body('koli_chargeable_weight', 'koli chargeable weight  cannot empty')
          .not()
          .isEmpty(),
        body('koli_height', 'koli height  cannot empty')
          .not()
          .isEmpty(),
        body('koli_description', 'koli description cannot empty')
          .not()
          .isEmpty(),
        body('connote_id', 'connote id cannot empty')
          .not()
          .isEmpty(),
        body('koli_weight', 'koli weight cannot empty')
          .not()
          .isEmpty(),
        body('koli_id', 'koli id cannot empty')
          .not()
          .isEmpty(),
        body('koli_code', 'koli code cannot empty')
          .not()
          .isEmpty()
      ];
    };
    case 'update_package': {
      return [
        param('id_package', 'Koli id cannot empty')
          .not()
          .isEmpty(),
        body('koli_length', 'Koli Length cannot empty')
          .not()
          .isEmpty(),
        body('awb_url', 'Awb url cannot empty')
          .not()
          .isEmpty(),
        body('koli_chargeable_weight', 'koli chargeable weight  cannot empty')
          .not()
          .isEmpty(),
        body('koli_height', 'koli height  cannot empty')
          .not()
          .isEmpty(),
        body('koli_description', 'koli description cannot empty')
          .not()
          .isEmpty(),
        body('connote_id', 'connote id cannot empty')
          .not()
          .isEmpty(),
        body('koli_weight', 'koli weight cannot empty')
          .not()
          .isEmpty(),
        body('koli_code', 'koli code cannot empty')
          .not()
          .isEmpty()
      ];
    };
    case 'patch_package': {
      return [
        param('id_package', 'Koli id cannot empty')
          .not()
          .isEmpty(),
        body('koli_length', 'Koli Length cannot empty')
          .not()
          .optional(),
        body('awb_url', 'Awb url cannot empty')
          .not()
          .optional(),
        body('koli_chargeable_weight', 'koli chargeable weight  cannot empty')
          .not()
          .optional(),
        body('koli_height', 'koli height  cannot empty')
          .not()
          .optional(),
        body('koli_description', 'koli description cannot empty')
          .not()
          .optional(),
        body('connote_id', 'connote id cannot empty')
          .not()
          .optional(),
        body('koli_weight', 'koli weight cannot empty')
          .not()
          .optional(),
        body('koli_code', 'koli code cannot empty')
          .not()
          .optional()
      ];
    };
    default:
      break;
  }
};


