//redis setup
const redis = require('redis');
const redisClient = redis.createClient({host: process.env.REDIS_DOCKER_HOST});

redisClient.on('error', (err) => {
  console.log("redis error: ", err);
});

module.exports = redisClient;