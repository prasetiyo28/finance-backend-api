'use strict';
const { promisify } = require('util');
const fastStringfy = require('fast-safe-stringify');
const JSONparse = require('fast-json-parse');
const RedisScan = require('node-redis-scan');

const redisClient = require('../config/redis');

const scanner = new RedisScan(redisClient);
const getAsync = promisify(redisClient.get).bind(redisClient);
const scanAsync = promisify(scanner.scan).bind(scanner);

const redisCache = {
  getInAsync: async (key) => {
    const result = await getAsync(key);
    // redisClient.quit();
    return JSON.parse(result);
  },
  set: (key, data) => {
    redisClient.set(key, fastStringfy(data));
  }
};

module.exports = redisCache;
