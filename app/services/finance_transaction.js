const DB = require('../models');
const Transaction = DB.finance_transaction;
// const Sequelize = DB.Sequelize;
// const Op = Sequelize.Op;

exports.getUserTransaction = async params => {
    return Transaction.findAll(
        // {
    //     where : {
    //         [Op.or]: {
    //             email: params.username,
    //             username: params.username
        
    //         }
    //     }
    // }
    );
};

// exports.createUser = async params => {
//     return Users.create(params);
// };