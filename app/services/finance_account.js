const DB = require('../models');
const Accounts = DB.finance_account;
// const Users = DB.users;
const Sequelize = DB.Sequelize;
const Op = Sequelize.Op;

exports.getUserAccounts = async params => {
  let where = {};

  if (params.search) {
    where = {
      [Op.or]: {
        type: {
          [Op.like]: `%${params.search}%`
        },
        name: {
          [Op.like]: `%${params.search}%`
        },
        description: {
          [Op.like]: `%${params.search}%`
        }
      }
    };
  }

  if (params.filter_name) {
    where.name = {
      [Op.like]: `%${params.filter_name}%`
    };
  }
  where.id_user = params.id_user;
  where.deleted = false;

  return Accounts.findAndCountAll(
    {
      where: where,
      limit: params.perPage,
      offset: (params.page - 1) * params.perPage
    }
  );
};

exports.getAccountById = async params => {
  return Accounts.findOne(
    {
      where: {
        id: params.accountId,
        id_user: params.id_user
      }
    }
  );
};

exports.createAccount = async params => {
  return Accounts.create(params);
};

exports.updateAccount = async params => {
  return Accounts.update(params,
    {
      where: {
        id: params.id
      }
    }
  );
};
