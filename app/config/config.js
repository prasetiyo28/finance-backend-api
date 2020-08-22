require('dotenv').config();

module.exports = {
  local: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'Asia/Jakarta',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: 'Asia/Jakarta'
    }
  },
  development: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'Asia/Jakarta',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: 'Asia/Jakarta'
    }
  },
  test: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'Asia/Jakarta',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: 'Asia/Jakarta'
    }
  },
  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    logging: false,
    dialectModule: require('mysql2'),
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    timezone: 'Asia/Jakarta',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: 'Asia/Jakarta'
    }
  }
};
