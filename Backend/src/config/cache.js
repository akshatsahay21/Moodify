const Redis = require('ioredis').default;

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})

redis.on("connect", () => {
    console.log("Connected to Redis");
})

redis.on("error", (err) => {
    console.log("Error connecting to Redis:", err);
})

module.exports = redis;