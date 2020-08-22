const DB = require('../models');
const Accounts = DB.finance_account;
// const Sequelize = DB.Sequelize;
// const Op = Sequelize.Op;

exports.getUserAccounts = async params => {
    console.log(params);
    return Accounts.findAll(
        {
        where : {
            deleted : false,
            id_user : params.user_id
        }
    }
    );
};


exports.getAccountById = async params => {
    console.log(params);
    return Accounts.findOne(
        {
        where : {
            id : params.accountId,
            id_user : params.id_user
        }
    }
    );
};

// exports.createUser = async params => {
//     return Users.create(params);
// };