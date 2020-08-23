const DB = require('../models');
const Transaction = DB.finance_transaction;
const Account = DB.finance_account;
const Sequelize = DB.Sequelize;
const Op = Sequelize.Op;

exports.getUserTransaction = async params => {
  let where = {};

  if (params.search) {
    where = {
      [Op.or]: {
        amount: {
          [Op.like]: params.search
        },
        finance_name: {
          [Op.like]: `%${params.search}%`
        },
        description: {
          [Op.like]: `%${params.search}%`
        }
      }
    };
  }

  if (params.filter_date) {
    where.createdAt = {
      [Op.between]: params.filter_date
    };
  }
  if (params.filter_name) {
    where.finance_name = {
      [Op.like]: `%${params.filter_name}%`
    };
  }
  where.id_user = params.id_user;
  where.deleted = false;

  return Transaction.findAndCountAll(
    {
      where: where,
      include: {
        model: Account,
        where: {
          deleted: false
        }
      },
      limit: params.perPage,
      offset: (params.page - 1) * params.perPage
    }
  );
};

exports.getUserTransactionById = async params => {
  return Transaction.findOne(
    {
      where: {
        id_user: params.id_user,
        id: params.id
      },
      include: {
        model: Account
      }
    }
  );
};

exports.createUserTransaction = async params => {
  return Transaction.create(params);
};

exports.updateTransaction = async params => {
  return Transaction.update(params,
    {
      where: {
        id: params.id
      }
    }
  );
};

exports.getReportMonth = async params => {
  return DB.sequelize.query(
    'select SUM(finance_transactions.amount) as total_transaction,\n' +
    'MONTHNAME(finance_transactions.createdAt) as month\n' +
    'from finance_transactions\n' +
    '    inner join finance_accounts on finance_transactions.id_account = finance_accounts.id  where finance_transactions.id_user=:id_user AND finance_transactions.deleted=false group by MONTHNAME(finance_transactions.createdAt)',
    {
      replacements: { id_user: params.id_user },
      type: DB.sequelize.QueryTypes.SELECT
    }
  );
};

exports.getReportDaily = async params => {
  return DB.sequelize.query(
    'select SUM(finance_transactions.amount) as total_transaction,\n' +
    'DATE(finance_transactions.createdAt) as date\n' +
    'from finance_transactions\n' +
    '    inner join finance_accounts on finance_transactions.id_account = finance_accounts.id  where finance_transactions.id_user=:id_user AND finance_transactions.deleted=false group by DATE(finance_transactions.createdAt)',
    {
      replacements: { id_user: params.id_user },
      type: DB.sequelize.QueryTypes.SELECT
    }
  );
};
