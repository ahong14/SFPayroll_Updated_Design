//redis setup
const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  console.log("redis error: ", err);
});

module.exports = redisClient;