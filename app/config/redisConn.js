// Connection config for Redis

module.exports = {
  local: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    db: 0,
    auth_pass: process.env.REDIS_PASSWORD || ''
  },
  development: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    db: 4,
    auth_pass: process.env.REDIS_PASSWORD || ''
  }
};
