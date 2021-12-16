//redis setup
const redis = require('redis');
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || process.env.REDIS_DEV
});

redisClient.on('error', err => {
    console.log('redis error: ', err);
});

module.exports = redisClient;
